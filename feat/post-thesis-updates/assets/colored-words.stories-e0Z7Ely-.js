import{i as m,a as h,x as d}from"./iframe-BLwnf0Qk.js";import{n,t as w}from"./property-Dgah4u3S.js";var g=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=(t,o,i)=>o in t?g(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,r=(t,o,i,c)=>{for(var a=c>1?void 0:c?f(o,i):o,l=t.length-1,p;l>=0;l--)(p=t[l])&&(a=(c?p(o,i,a):p(a))||a);return c&&a&&g(o,i,a),a},x=(t,o,i)=>y(t,o+"",i);let e=class extends h{updateStyleVariable(t,o,i){const c=this[t]??i;this.style.setProperty(o,c)}updated(t){const o=(i,c,a)=>t.has(i)&&this.updateStyleVariable(i,c,a);o("contJustifyContent","--colored-words-cont-justify-content","center"),o("contMinWidth","--colored-words-cont-min-width","200px"),o("contMaxWidth","--colored-words-cont-max-width","300px"),o("contMinHeight","--colored-words-cont-min-height","35px"),o("contMaxHeight","--colored-words-cont-max-height","400px"),o("contMarginTop","--colored-words-cont-margin-top","10px"),o("contMarginLeft","--colored-words-cont-margin-left","10px"),o("contMarginRight","--colored-words-cont-margin-right","10px"),o("contMarginBottom","--colored-words-cont-margin-bottom","10px"),o("contOverflowY","--colored-words-cont-overflow-y","auto"),o("wordGap","--colored-words-word-gap","0.5rem"),o("fontSize","--colored-words-font-size","21px"),o("fontFamily","--colored-words-font-family","Arial, sans-serif"),o("lineHeight","--colored-words-line-height","22px")}render(){return d` ${this.words.map(t=>d`<span style="color: ${t.color}; font-weight: ${t.weight};"
            >${t.text}</span
          >
          ${this.separator?d`<span>${this.separator}</span>`:""}`)}`}};x(e,"styles",m`
    :host {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: var(--colored-words-cont-justify-content, center);
      min-width: var(--colored-words-cont-min-width, 200px);
      max-width: var(--colored-words-cont-max-width, 300px);
      min-height: var(--colored-words-cont-min-height, 35px);
      max-height: var(--colored-words-cont-max-height, 400px);
      margin-top: var(--colored-words-cont-margin-top, 10px);
      margin-left: var(--colored-words-cont-margin-left, 10px);
      margin-right: var(--colored-words-cont-margin-right, 10px);
      margin-bottom: var(--colored-words-cont-margin-bottom, 10px);
      overflow-x: hidden;
      overflow-y: var(--colored-words-cont-overflow-y, auto);
      gap: var(--colored-words-word-gap, 0.5rem);
      font-size: var(--colored-words-font-size, 21px);
      font-family: var(--colored-words-font-family, 'Arial', sans-serif);
      line-height: var(--colored-words-line-height, 22px);
    }
  `);r([n({attribute:!1})],e.prototype,"words",2);r([n({type:String})],e.prototype,"separator",2);r([n({type:String})],e.prototype,"contJustifyContent",2);r([n({type:String})],e.prototype,"contMinWidth",2);r([n({type:String})],e.prototype,"contMaxWidth",2);r([n({type:String})],e.prototype,"contMinHeight",2);r([n({type:String})],e.prototype,"contMaxHeight",2);r([n({type:String})],e.prototype,"contMarginTop",2);r([n({type:String})],e.prototype,"contMarginLeft",2);r([n({type:String})],e.prototype,"contMarginRight",2);r([n({type:String})],e.prototype,"contMarginBottom",2);r([n({type:String})],e.prototype,"contOverflowY",2);r([n({type:String})],e.prototype,"fontSize",2);r([n({type:String})],e.prototype,"fontFamily",2);r([n({type:String})],e.prototype,"lineHeight",2);r([n({type:String})],e.prototype,"wordGap",2);e=r([w("colored-words")],e);const H={title:"Components/Text/Colored Words",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<colored-words>`\n\nDisplays an array of words where each word can have its own color and font weight.\n\n#### CSS Custom Properties\n\n| Variable                                   | Description                      |\n|--------------------------------------------|----------------------------------|\n| `--colored-words-cont-justify-content`  | Host justify-content             |\n| `--colored-words-cont-min-width`        | Host minimum width               |\n| `--colored-words-cont-max-width`        | Host maximum width               |\n| `--colored-words-cont-min-height`       | Host minimum height              |\n| `--colored-words-cont-max-height`       | Host maximum height              |\n| `--colored-words-cont-margin-top`       | Host margin-top                  |\n| `--colored-words-cont-margin-left`      | Host margin-left                 |\n| `--colored-words-cont-margin-right`     | Host margin-right                |\n| `--colored-words-cont-margin-bottom`    | Host margin-bottom               |\n| `--colored-words-cont-overflow-y`       | Host overflow-y                  |\n| `--colored-words-word-gap`              | Gap between rendered items       |\n| `--colored-words-font-size`             | Font size of words               |\n| `--colored-words-font-family`           | Font family of words             |\n| `--colored-words-line-height`           | Line height of words             |\n                "}}},argTypes:{words:{control:"object",description:"Array of word objects: { text: String, color: String, weight: String } - text is the word to render, color is the word color as css color value, weight is the font weight of the word as css font-weight value",table:{category:"Content"}},separator:{control:"text",description:"Optional separator rendered after each word",table:{category:"Content",defaultValue:{summary:""}}},contJustifyContent:{control:"text",description:"Host justify-content",table:{category:"Layout",defaultValue:{summary:"center"}}},contMinWidth:{control:"text",description:"Host min-width",table:{category:"Layout",defaultValue:{summary:"200px"}}},contMaxWidth:{control:"text",description:"Host max-width",table:{category:"Layout",defaultValue:{summary:"300px"}}},contMinHeight:{control:"text",description:"Host min-height",table:{category:"Layout",defaultValue:{summary:"35px"}}},contMaxHeight:{control:"text",description:"Host max-height",table:{category:"Layout",defaultValue:{summary:"400px"}}},contMarginTop:{control:"text",description:"Host margin-top",table:{category:"Layout",defaultValue:{summary:"10px"}}},contMarginLeft:{control:"text",description:"Host margin-left",table:{category:"Layout",defaultValue:{summary:"10px"}}},contMarginRight:{control:"text",description:"Host margin-right",table:{category:"Layout",defaultValue:{summary:"10px"}}},contMarginBottom:{control:"text",description:"Host margin-bottom",table:{category:"Layout",defaultValue:{summary:"10px"}}},contOverflowY:{control:"text",description:"Host overflow-y behavior",table:{category:"Layout",defaultValue:{summary:"auto"}}},wordGap:{control:"text",description:"Gap between words",table:{category:"Text",defaultValue:{summary:"0.5rem"}}},fontSize:{control:"text",description:"Words font size",table:{category:"Text",defaultValue:{summary:"21px"}}},fontFamily:{control:"text",description:"Words font family",table:{category:"Text",defaultValue:{summary:"Arial, sans-serif"}}},lineHeight:{control:"text",description:"Words line height",table:{category:"Text",defaultValue:{summary:"22px"}}}}},s=t=>d`
  <colored-words
    .words=${t.words}
    .separator=${t.separator}
    .contJustifyContent=${t.contJustifyContent}
    .contMinWidth=${t.contMinWidth}
    .contMaxWidth=${t.contMaxWidth}
    .contMinHeight=${t.contMinHeight}
    .contMaxHeight=${t.contMaxHeight}
    .contMarginTop=${t.contMarginTop}
    .contMarginLeft=${t.contMarginLeft}
    .contMarginRight=${t.contMarginRight}
    .contMarginBottom=${t.contMarginBottom}
    .contOverflowY=${t.contOverflowY}
    .wordGap=${t.wordGap}
    .fontSize=${t.fontSize}
    .fontFamily=${t.fontFamily}
    .lineHeight=${t.lineHeight}
  ></colored-words>
`;s.args={words:[{text:"GeneA",color:"#d05d5d",weight:"700"},{text:"GeneB",color:"#3a568c",weight:"400"},{text:"GeneC",color:"#2d8f5a",weight:"700"},{text:"GeneD",color:"#9a6b17",weight:"400"}],separator:"",contJustifyContent:"center",contMinWidth:"200px",contMaxWidth:"300px",contMinHeight:"35px",contMaxHeight:"400px",contMarginTop:"10px",contMarginLeft:"10px",contMarginRight:"10px",contMarginBottom:"10px",contOverflowY:"auto",wordGap:"0.5rem",fontSize:"21px",fontFamily:"Arial, sans-serif",lineHeight:"22px"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => html\`
  <colored-words
    .words=\${args.words}
    .separator=\${args.separator}
    .contJustifyContent=\${args.contJustifyContent}
    .contMinWidth=\${args.contMinWidth}
    .contMaxWidth=\${args.contMaxWidth}
    .contMinHeight=\${args.contMinHeight}
    .contMaxHeight=\${args.contMaxHeight}
    .contMarginTop=\${args.contMarginTop}
    .contMarginLeft=\${args.contMarginLeft}
    .contMarginRight=\${args.contMarginRight}
    .contMarginBottom=\${args.contMarginBottom}
    .contOverflowY=\${args.contOverflowY}
    .wordGap=\${args.wordGap}
    .fontSize=\${args.fontSize}
    .fontFamily=\${args.fontFamily}
    .lineHeight=\${args.lineHeight}
  ></colored-words>
\``,...s.parameters?.docs?.source}}};const v=["Default"];export{s as Default,v as __namedExportsOrder,H as default};
