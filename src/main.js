const div1 = dom.create("<div>Div1</div>");
console.log(div1);

dom.after(test,div1)

const div3 = dom.create('<div id="parent">Div3</div>')
dom.wrap(test,div3)
console.log(div3);

const nodes = dom.empty(ept)
console.log(nodes);


dom.attr(test,'title','Hello, CGC')

const title = dom.attr(test,'title')
console.log(`title: ${title}`);


dom.text(test3,'test3的船新内容')
console.log(dom.text(test));

dom.html(test1,'<strong><em>test1</em></strong>')
console.log(dom.html(test1));

dom.style(test,{border:'1px solid red', color:'blue'})

console.log(dom.style(test,'color'));

console.log(dom.style(test,'border'));

dom.style(test, 'color', 'rgb(155,10,155)')

console.log(dom.style(test,'color'));

dom.class.add(test,'box1')
dom.class.add(test,'box2')
dom.class.remove(test,'box1')

console.log(`box2:${dom.class.has(test,'box2')}`);
console.log(`box1:${dom.class.has(test,'box1')}`); 

const onfn = () =>{console.log('点击了')}
const onfn1 = () =>{console.log('真的点击了')}

dom.on(test,'click',onfn)
dom.on(test,'click',onfn1)
dom.off(test,'click',onfn)
dom.off(test,'click',onfn1)

const testDiv = dom.find('#test2')[0]

console.log(testDiv)

console.log(dom.find('.p1',testDiv)[0])


const cc2 = dom.find('.c2',sib2)[0]

console.log(dom.siblings(s2))

console.log(dom.siblings(cc2))
console.log(dom.next(cc2))
console.log(dom.previous(cc2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n,'color','red'))

console.log(dom.index(s2))
console.log(dom.index(dom.find('.c2',sib)[0]))



const div4 = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div4, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素







