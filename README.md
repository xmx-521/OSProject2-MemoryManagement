# 内存管理之项目2项目文档

> 选题：请求调页存储管理方式模拟
>
> 学号：1953474
>
> 姓名：徐满心
>
> 指导教师：张慧娟
>
> 预览网址：https://manxin521.site/OSProject2-MemoryManagement/dist/



## 一、项目概述

本项目实现了一个内存管理系统。

在本项目实现的系统中，每个页面可存放10条指令，分配给一个作业的内存块为4。该作业有320条指令，即它的地址空间为32页，初始状态下所有页还没有调入内存，本系统即模拟了该作业的执行过程。

由于是使用请求调页存储管理方式的模拟，页面置换算法是本项目的重点。本项目实现了两种页面置换算法：FIFO算法与LRU算法。FIFO算法与LRU算法都基于记录与页有关时间的朴素思路。

为了清晰地展示系统的调度过程，并方便老师与助教测试系统，本项目选择以网页形式展示项目，项目网址为：https://manxin521.site/OSProject2-MemoryManagement/dist/ ，访问需要联网。



## 二、系统亮点

本系统实现了一个请求调页存储管理方式的内存管理系统的全部基础功能，除此之外，本项目还具有以下亮点：

- 科学的指令生成方式，使得指令分布随机且均匀。

- 地址空间、内存的优秀可视化。对于未执行指令、已执行指令、正在执行指令进行了特殊标注，对于不同页做了不同背景色处理，使使用者能够清楚地看到调页过程中发生的变化。
- 能够实时看到缺页率的变化趋势，而不必全部指令执行完毕后才看见。
- 支持自动执行、调整自动执行速度、暂停自动执行、重置指令等功能。

## 三、使用算法详解

### 1.指令生成算法

为了保证指令生成均匀，本系统使用了以下指令生成方式：

1. 在 0 - 319条指令之间，随机选取一个起始执行指令，如序号为m。

2. 顺序执行下一条最近的指令，如当前序号为m，则优先执行指令m+1，若指令m+1已被执行，则优先执行指令m+2，以此类推。若指令m+1 - 319都已被执行，则转至执行指令0，之后过程亦然。设新指令地址为m1。

3. 通过随机数，跳转到前地址部分0 - m1-1中的某个指令处，若0-m1-1中的全部指令都已被执行，则取m2 = m1，否则跳转并取m2为跳转至的地址。

4. 顺序执行下一条最近的指令，过程与步骤2相同，此处不再赘述。设新指令地址为m3
5. 通过随机数，跳转到后地址部分m3+1 - 319中的某指令处，其序号为m4，若m3+1 - 319中的全部指令都已被执行，则取m4 = m3，否则跳转并取m4为跳转至的地址。
6. 重复执行步骤2到步骤5。

使用者每次点击重置按钮，都会按以上流程生成指令集。

### 2.FIFO算法

FIFO算法是最简单的页置换算法，FIFO页置换算法为每个页记录者该页调入内存的时间。当必须置换一页时，将选择最旧的页。

FIFO算法的代码实现方式较多，本系统采用了一种朴素高效的方法。采用一个全局变量FIFOTime作为全局的共享时间，初始值设为0，4个内存帧都含有私有的FIFOTime记录该页调入内存的时间。当4个内存帧全部被占用后。若发生页错误，则取FIFOTime最小的页作为置换页，将新的帧调入该帧并使全局变量FIFOTime的值加1后赋值更新该内存帧的私有FIFOTime，从而实现页置换。

### 3.LRU算法

LRU置换为每个页关联该页上次使用的时间。当必须置换一页时，LRU选择最长时间没有使用的页。这种策略为向后看（而不是向前看）最优页置换算法。

本项目的LRU代码实现采用了与FIFO算法实现相似的思路。采用一个全局变量LRUTime作为全局的共享时间，初始值设为0，4个内存帧都含有私有的LRUTime记录该页调入内存的时间。当4个内存帧全部被占用后。若发生页错误，则取LRUTime最小的页作为置换页，将新的帧调入该帧并使全局变量LRUTime的值加1后赋值更新该内存帧的私有LRUTime，从而实现页置换。

与FIFO算法不同的是，当不发生页错误时（即指令命中内存中的页时），同样要将LRUTime的值加1后赋值更新对应命中内存帧的LRUTime，这是与FIFO算法的不同之处。

## 四、使用说明

项目网址为：https://manxin521.site/OSProject2-MemoryManagement/dist/ ，直接访问即可，访问需要联网，建议使用Chrome浏览器访问，其余浏览器不保证系统正常运行。

也可通过源码进行构建，见第五部分。

### 开发环境

- MacOS
- Chrome
- VSCode

### 开发语言

- Javascript
- HTML
- CSS

### 开发框架

- Vue.js 3.0

### 参考第三方

- Element plus
- Tailwind CSS

### 主界面

[![2oxBd0.png](https://z3.ax1x.com/2021/06/13/2oxBd0.png)](https://imgtu.com/i/2oxBd0)



页面自左向右可分为3个部分：地址空间、Memory与控制板。

- 左侧地址空间中记录了320条指令的全部信息，包括其所处页号、地址、其下条指令的地址以及指令所处的状态（未执行或已执行）。
- 中间浅绿色的Memory中可视化了内存的大量信息，包括每个内存帧中正装载的页的页号、页中指令以及页中每条指令的状态。每条指令可处于三种状态中的一种：未执行、正执行与已执行，分别通过蓝色、红色与绿色标识。初始状态下，4个内存帧内容都为空。最下方的进度条显示了指令执行的进度。
- 在右侧的控制板可以选择页置换算法（FIFO或LRU)，并显示了模拟系统的一些不变的基础信息：包括指令数、页数等。以及一些动态变化的信息：包括已执行指令数、缺页数、缺页率等。控制板还可以调节自动执行的执行速度，控制系统执行以及重置指令。

### 执行中

[![2ox1dP.png](https://z3.ax1x.com/2021/06/13/2ox1dP.png)](https://imgtu.com/i/2ox1dP)

### 执行完毕

[![2ox3If.png](https://z3.ax1x.com/2021/06/13/2ox3If.png)](https://imgtu.com/i/2ox3If)

## 五、通过源码进行构建

``` 
npm install

```



### Compiles and hot-reloads for development

```
npm run serve

```



### Compiles and minifies for production

```
npm run build

```



### Lints and fixes files

```
npm run lint

```


### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).