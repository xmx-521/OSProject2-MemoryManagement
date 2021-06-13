<template>
    <div class="backgroundColor headConfig">
        <el-row type="flex" justify="center" class="titleConfig">
            内存管理
        </el-row>
        <el-row type="flex" justify="center">
            (分页方法)
        </el-row>
    </div>
    <el-row type="flex" align="middle" justify="space-between">
        <el-col span=24>
            <el-card>
                <template #header>
                    <div>
                        <span>地址空间</span>
                    </div>
                </template>
                <el-table :data="instructions" height="500" stripe>
                    <el-table-column prop="page_id" label="页号" width="50">
                    </el-table-column>
                    <el-table-column prop="address" label="地址" width="50">
                    </el-table-column>
                    <el-table-column prop="next_address" label="下个地址" width="80">
                    </el-table-column>
                    <el-table-column prop="status" label="状态" width="80">
                        <template #default="scope">
                            <el-tag :type="scope.row.status==='未执行'?'primary':'success'" disable-transitions>
                                {{scope.row.status}}</el-tag>
                        </template>

                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col span=24>
            <el-row>
                <el-card class="memory">
                    <template #header>
                        <span style="font-size:25px;">Memory</span>
                    </template>
                    <el-space :size="30">
                        <el-col span=24 v-for="(memoryFrame,index) in memoryFrames" :key="index">
                            <el-card class="box-card memoryFrame" :style="memoryFrame.color">
                                <template #header>
                                    <div class="card-header">
                                        <span style="font-size:20px">Frame {{index}}</span>
                                    </div>
                                </template>
                                <div v-if="memoryFrame.pageId!=-1">
                                    <div class="pageId">
                                        PageId:{{memoryFrame.pageId}}
                                    </div>
                                    <div v-for="(inst,index) in memoryFrame.instructions" :key="index"
                                        class="instruction">
                                        <div v-if="inst.status=='未执行'&&inst.address!=currentInstId" class="unconducted">
                                            {{inst.address}}
                                        </div>
                                        <div v-if="inst.status=='已执行'&&inst.address!=currentInstId" class="conducted">
                                            {{inst.address}}
                                        </div>
                                        <div v-if="inst.address==currentInstId" class="conducting">
                                            {{inst.address}}
                                        </div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-space>
                </el-card>
            </el-row>
            <el-progress :text-inside="true" :stroke-width="26" :percentage="conductPercent" class="conductProgress">
                <template #default="{ percentage }">
                    <span>指令执行进度：</span>
                    <span>{{percentage}}%</span>
                </template>
            </el-progress>
        </el-col>
        <el-col span=24>
            <el-card class="controller">
                <span>页置换算法: </span>
                <el-select v-model="currentAlgorithm" placeholder="请选择页置换算法" :disabled="haveConductStepNum>0">
                    <el-option v-for="item in algorithms" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-card style="margin-top:10px;">
                    <el-row>
                        指令数: 320
                    </el-row>
                    <el-row>
                        页数： 32
                    </el-row>
                    <el-row>
                        内存帧数： 4
                    </el-row>
                    <el-row>
                        已执行指令数: {{haveConductStepNum}}
                    </el-row>
                    <el-row>
                        缺页数：{{missStepNum}}
                    </el-row>
                    <el-row>
                        当前指令地址：{{currentInstId}}
                    </el-row>
                    <el-row>
                        下条指令地址：{{instructions[currentInstId].next_address}}
                    </el-row>
                </el-card>
                <el-progress type="dashboard" :percentage="missRate" style="margin-top:10px;">
                    <template #default="{ percentage }">
                        <div class="percentage-value">{{(percentage>0?percentage:0)}}%</div>
                        <div class="percentage-label">缺页率</div>
                    </template>
                </el-progress>
                <div class="controlPannel">
                    <div style="margin-bottom:10px;">
                        <span>自动执行速度: &times;{{speed}}</span>
                        <el-slider v-model="speed" max=5 :disabled="isAutoExecuting">
                        </el-slider>
                    </div>
                    <el-space direction="vertical">
                        <el-row>
                            <el-button-group>
                                <el-button @click="conductOneStep()" icon="el-icon-arrow-right"
                                    :disabled="isAutoExecuting">
                                    执行一步
                                </el-button>
                                <el-button type="primary" @click="autoExecute()" icon="el-icon-d-arrow-right"
                                    :disabled="isAutoExecuting||isPaused">自动执行
                                </el-button>
                            </el-button-group>
                        </el-row>
                        <el-row>
                            <el-button-group>
                                <el-button type="warning" icon="el-icon-video-pause" @click="pause" v-if="!isPaused"
                                    :disabled="!isAutoExecuting">暂停执行</el-button>
                                <el-button type="success" icon="el-icon-video-play" @click="continueExecute"
                                    v-if="isPaused">继续执行</el-button>
                                <el-button type="danger" plain @click="reset()" icon="el-icon-refresh-right">重置指令
                                </el-button>
                            </el-button-group>
                        </el-row>
                    </el-space>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'PageManagement',
        data() {
            return {
                algorithms: [{
                    value: 'FIFO',
                    label: 'FIFO'
                }, {
                    value: 'LRU',
                    label: 'LRU'
                }],
                currentAlgorithm: 'FIFO',
                memoryFrames: Array(4),
                instructions: Array(320),
                currentInstId: -1,
                haveConductStepNum: 0,
                missStepNum: 0,
                FIFOTime: 0,
                LRUTime: 0,
                isAutoExecuting: false,
                speed: 2,
                isPaused: false,
                pageColors: Array(32)
            }
        },
        computed: {
            conductPercent() {
                return ((this.haveConductStepNum / 320) * 100).toFixed(1);
            },
            realSpeed() {
                if (this.speed > 0) {
                    return (500 / this.speed);
                } else {
                    return 1000000
                }
            },
            missRate() {
                return ((this.missStepNum / this.haveConductStepNum) * 100).toFixed(1);
            }
        },
        beforeMount() {
            this.reset();
        },
        methods: {
            reset() {
                this.haveConductStepNum = 0;
                this.missStepNum = 0;
                this.FIFOTime = 0;
                this.LRUTime = 0;
                this.isAutoExecuting = false;
                this.speed = 2;
                this.isPaused = false;
                this.initPageColors();
                this.initMemoryPages();
                this.initInstructions();
            },
            initPageColors() {
                for (let i = 0; i < 32; i++) {
                    this.pageColors[i] = this.randomColor()
                }
            },
            initMemoryPages() {
                this.memoryPages = Array(4);
                for (let i = 0; i < 4; i++) {
                    this.memoryFrames[i] = {
                        pageId: -1,
                        instructions: [],
                        FIFOTime: this.FIFOTime,
                        LRUTime: this.LRUTime,
                        color: 'backgroundColor:white;'
                    }
                }
            },
            initInstructions() {
                this.instructions = Array(320);
                let totalNum = 321
                let last = 319;
                let next = last;
                let start = -1;
                for (let i = 0; i < totalNum; i++) {
                    switch (i % 4) {
                        case 0: {
                            let emptyIndices = []
                            for (let j = 0; j < last; j++) {
                                if (this.instructions[j] == undefined) {
                                    emptyIndices.push(j)
                                }
                            }
                            if (emptyIndices.length != 0) {
                                next = emptyIndices[this.getRndInteger(0, emptyIndices.length - 1)]
                                if (i != 0) {
                                    this.instructions[last] = {
                                        page_id: Math.floor(last / 10),
                                        address: last,
                                        next_address: next,
                                        status: '未执行'
                                    };
                                } else {
                                    start = next;
                                }
                                last = next;
                            } else {
                                totalNum++;
                            }
                            break;
                        }
                        case 1: {
                            let notFound = true;
                            while (notFound) {
                                next = (next + 1) % 320
                                if (this.instructions[next] == undefined) {
                                    this.instructions[last] = {
                                        page_id: Math.floor(last / 10),
                                        address: last,
                                        next_address: next,
                                        status: '未执行'
                                    };
                                    last = next;
                                    notFound = false;
                                }
                            }
                            break;
                        }
                        case 2: {
                            let emptyIndices = []
                            for (let j = last + 1; j < 320; j++) {
                                if (this.instructions[j] == undefined) {
                                    emptyIndices.push(j)
                                }
                            }
                            if (emptyIndices.length != 0) {
                                next = emptyIndices[this.getRndInteger(0, emptyIndices.length - 1)]
                                this.instructions[last] = {
                                    page_id: Math.floor(last / 10),
                                    address: last,
                                    next_address: next,
                                    status: '未执行'
                                };
                                last = next;
                            } else {
                                totalNum++;
                            }
                            break;
                        }
                        case 3: {
                            let notFound = true;
                            while (notFound) {
                                next = (next + 1) % 320
                                if (this.instructions[next] == undefined) {
                                    this.instructions[last] = {
                                        page_id: Math.floor(last / 10),
                                        address: last,
                                        next_address: next,
                                        status: '未执行'
                                    };
                                    last = next;
                                    notFound = false;
                                }
                            }
                            break;
                        }

                    }
                }
                // console.log(count);
                // console.log(start);
                this.currentInstId = start;
            },
            getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            conductOneStep() {
                if (this.haveConductStepNum <= 319) {
                    if (this.haveConductStepNum != 0) {
                        this.currentInstId = this.instructions[this.currentInstId].next_address;
                    }
                    this.haveConductStepNum++;
                    // console.log(this.haveConductStepNum);
                    switch (this.currentAlgorithm) {
                        case 'FIFO': {
                            this.conductOneFIFO();
                            break;
                        }
                        case 'LRU': {
                            this.conductOneLRU();
                            break;
                        }
                    }
                    this.instructions[this.currentInstId].status = "已执行";
                }
            },
            conductOneFIFO() {
                // console.log(this.currentInstId);
                let pageId = Math.floor(this.currentInstId / 10)
                // console.log(pageId);
                let frameId = -1;
                for (let i = 0; i < this.memoryFrames.length; i++) {
                    if (this.memoryFrames[i].pageId == pageId) {
                        frameId = i;
                    }
                }
                if (frameId == -1) {
                    this.missStepNum += 1;
                    frameId = this.unloadOneFIFOPage();
                }
                this.loadOnePage(frameId, pageId);
                // console.log(this.memoryFrames[frameId]);
            },
            conductOneLRU() {
                let pageId = Math.floor(this.currentInstId / 10)
                let frameId = -1;
                for (let i = 0; i < this.memoryFrames.length; i++) {
                    if (this.memoryFrames[i].pageId == pageId) {
                        frameId = i;
                    }
                }
                if (frameId == -1) {
                    this.missStepNum += 1;
                    frameId = this.unloadOneLRUPage();
                } else {
                    this.LRUTime++;
                    console.log(frameId);
                    this.memoryFrames[frameId].LRUTime = this.LRUTime;
                }
                this.loadOnePage(frameId, pageId);
            },
            unloadOneFIFOPage() {
                let outFrameId = 0;
                let minFIFOTime = this.memoryFrames[0].FIFOTime;
                for (let i = 0; i < this.memoryFrames.length; i++) {
                    if (minFIFOTime > this.memoryFrames[i].FIFOTime) {
                        outFrameId = i;
                        minFIFOTime = this.memoryFrames[i].FIFOTime;
                    }
                }
                return outFrameId;
            },
            unloadOneLRUPage() {
                let outFrameId = 0;
                let minLRUTime = this.memoryFrames[0].FIFOTime;
                for (let i = 0; i < this.memoryFrames.length; i++) {
                    if (minLRUTime > this.memoryFrames[i].LRUTime) {
                        outFrameId = i;
                        minLRUTime = this.memoryFrames[i].LRUTime;
                    }
                }
                return outFrameId;
            },
            loadOnePage(frameId, pageId) {
                let pageInstructions = []
                for (let i = pageId * 10; i < (pageId + 1) * 10; i++) {
                    pageInstructions.push(this.instructions[i]);
                }
                // console.log(pageId);
                // console.log(pageInstructions);
                this.LRUTime++;
                this.FIFOTime++;
                this.memoryFrames[frameId] = {
                    pageId: pageId,
                    instructions: pageInstructions,
                    FIFOTime: this.FIFOTime,
                    LRUTime: this.LRUTime,
                    color: `backgroundColor:${this.pageColors[pageId]};`
                }
            },
            autoExecute() {
                this.isAutoExecuting = true;
                let vueTimer = setInterval(() => {
                    if (this.haveConductStepNum == 320 || this.isAutoExecuting == false || this.isPaused ==
                        true) {
                        clearInterval(vueTimer);
                    } else {
                        this.conductOneStep()
                        console.log(this.haveConductStepNum)
                    }
                }, this.realSpeed)
            },
            pause() {
                this.isAutoExecuting = false;
                this.isPaused = true;
            },
            continueExecute() {
                this.isAutoExecuting = true;
                this.isPaused = false;
                this.autoExecute()
            },
            randomColor() {
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                return "rgb(" + r + "," + g + "," + b + "," + "0.5" + ")";
            }
        }
    }
</script>

<style scoped>
    .titleConfig {
        font-size: 30px;
    }

    .backgroundColor {
        background-color: #EFF6FF;
    }

    .headConfig {
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        margin-bottom: 10px;
    }

    .memoryFrame {
        height: 460px;
        width: 140px;
    }

    .memory {
        height: 560px;
        width: 700px;
        background-color: #ECFDF5;
    }

    .controller {
        height: 600px;
        width: 330px;
    }

    .conductProgress {
        margin-top: 10px;
    }

    .percentage-value {
        margin-bottom: 5px;
        font-size: 35px;
    }

    .percentage-label {
        font-size: 12px;
    }

    .instruction {
        height: 30px;
        font-size: 15px;
        border: 1px;
        text-align: center;
        line-height: 30px;
        border: 1px solid
    }

    .controlPannel {
        margin-top: 20px;
    }

    .pageId {
        height: 50px;
        font-size: 18px;
        text-align: center;
        line-height: 50px;
    }

    .conducted {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: #34d399;
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(52, 211, 153, 0));
        --tw-gradient-stops: var(--tw-gradient-from), #34d399, var(--tw-gradient-to, rgba(52, 211, 153, 0));
        --tw-gradient-to: #a7f3d0;
    }

    .unconducted {
        --tw-bg-opacity: 1;
        background-color: rgba(147, 197, 253, var(--tw-bg-opacity));

    }

    .conducting {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: #f59e0b;
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(245, 158, 11, 0));
        --tw-gradient-stops: var(--tw-gradient-from), #ef4444, var(--tw-gradient-to, rgba(239, 68, 68, 0));
        --tw-gradient-to: #ec4899;
    }
</style>