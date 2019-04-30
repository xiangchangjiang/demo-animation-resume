var result = `/*
*面试官你好，我是xxx
*我将以动画的形式来介绍我自己

*只用文字太单调了
*我就用代码来介绍吧

*首先准备一些样式
*/
*{margin:0;padding:0;}
*{box-sizing: border-box;}
*{
  transition:all 1s;
}
html{
  background:rgb(63,82,99);
  perspective:500px;
  font-size:1.5rem;
}
#code{
  border:1px solid black;
  padding:50px;
  position:fixed;
  left:0;
  width:47.5%;
  transform: rotateY(2deg) translateX(50px);
  background:rgba(12,15,19,0.5);
}


/*
*接下来我们让代码高亮
*/
.token.punctuation{
  color:#89DDFF;
}
#code{
  color:#E46B3E;
}
.token.comment{
  color:#EFEFEF;
}
.token.selector{
  color:#FFCB6B;
}
.token.property{
  color:#B2CCD6;
}
.token.function{
  color:#DD4A68;
}


/*
*不玩了，我来介绍以下我自己吧
*我需要一张白纸
*/
`
var result2 = `
#paper{
  position:fixed;
  right:0;
  width:47.5%;
  display:flex;
  align-items:center;
  justify-content:center;
  transform:rotateY(-2deg) translateX(-50px);
 
}
.content{
  width:100%;
  height:100%;
  background:white;
  color:black;
  padding:32px;

}
`
var md = `
#自我介绍

我叫xxx
xxx学校毕业
自学前端半年
希望应聘前端开发岗位

#技能介绍
熟悉 JavaScript CSS

#项目介绍
1.xxx轮播
2.xxx简历
3.xxx画板

#联系方式
QQ xxxxxxxxxx
Email xxxxxxx
电话  xxxxxxx

`
createPaper = () => {
  let paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
  let content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
}

writeCode('', result, () => {
  createPaper()
  writeCode(result, result2, () => {
    writeMarkdown(md)
  })
})

function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  domCode.innerHTML = prefix || ''
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = prefix + code.substring(0, n)
    xx.innerHTML = prefix + code.substring(0, n)
    domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css, "css")
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 80)
}

function writeMarkdown(md){
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = md.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= md.length) {
      window.clearInterval(id)
    }
  }, 80)
}