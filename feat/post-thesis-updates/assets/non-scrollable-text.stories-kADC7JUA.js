import{i as f,a as u,x as p}from"./iframe-DkD8NZt-.js";import{n as r,t as y}from"./property-rgYTM_nL.js";var m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,g=(t,e,l)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,n=(t,e,l,i)=>{for(var a=i>1?void 0:i?h(e,l):e,c=t.length-1,x;c>=0;c--)(x=t[c])&&(a=(i?x(e,l,a):x(a))||a);return i&&a&&m(e,l,a),a},d=(t,e,l)=>g(t,e+"",l);let o=class extends u{updateStyleVariable(t,e,l){const i=this[t]??l;this.style.setProperty(e,i)}updated(t){const e=(l,i,a)=>t.has(l)&&this.updateStyleVariable(l,i,a);e("compHeight","--non-scrollable-text-comp-height","fit-content"),e("compWidth","--non-scrollable-text-comp-width","200px"),e("textColor","--non-scrollable-text-color","black"),e("textJustify","--non-scrollable-text-justify","center"),e("textAlign","--non-scrollable-text-align","start"),e("textShadow","--non-scrollable-text-shadow","none"),e("textFontSize","--non-scrollable-text-font-size","16px"),e("textFontWeight","--non-scrollable-text-font-weight","normal"),e("textFontFamily","--non-scrollable-text-font-family","'Helvetica', 'Arial', sans-serif"),e("textOverflow","--non-scrollable-text-overflow","ellipsis"),e("userSelect","--non-scrollable-text-user-select","none")}render(){return p`${this.text}`}};d(o,"styles",f`
    :host {
      display: inline-block;

      height: var(--non-scrollable-text-comp-height, fit-content);
      width: var(--non-scrollable-text-comp-width, 200px);
      line-height: var(--non-scrollable-text-comp-height, fit-content);

      color: var(--non-scrollable-text-color, black);

      text-justify: var(--non-scrollable-text-justify, center);
      text-align: var(--non-scrollable-text-align, start);

      user-select: var(--non-scrollable-text-user-select, none);

      text-shadow: var(--non-scrollable-text-shadow, none);
      font-size: var(--non-scrollable-text-font-size, 16px);
      font-weight: var(--non-scrollable-text-font-weight, normal);
      font-family: var(
        --non-scrollable-text-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );

      overflow: hidden;
      text-overflow: var(--non-scrollable-text-overflow, ellipsis);
      white-space: nowrap;
    }
  `);n([r({type:String})],o.prototype,"compHeight",2);n([r({type:String})],o.prototype,"compWidth",2);n([r({type:String})],o.prototype,"textColor",2);n([r({type:String})],o.prototype,"textJustify",2);n([r({type:String})],o.prototype,"textAlign",2);n([r({type:String})],o.prototype,"textShadow",2);n([r({type:String})],o.prototype,"textFontSize",2);n([r({type:String})],o.prototype,"textFontWeight",2);n([r({type:String})],o.prototype,"textFontFamily",2);n([r({type:String})],o.prototype,"textOverflow",2);n([r({type:String})],o.prototype,"userSelect",2);n([r({type:String})],o.prototype,"text",2);o=n([y("non-scrollable-text")],o);const S={title:"Components/Text/Non Scrollable Text",tags:["autodocs"],parameters:{docs:{description:{component:`
### <non-scrollable-text>

Single line text component that does not scroll and truncates overflow with ellipsis.

#### CSS Custom Properties

| Variable | Description |
|-------------------------------|-------------------------------|
| --non-scrollable-text-comp-height | Height of the component |
| --non-scrollable-text-comp-width | Width of the component |
| --non-scrollable-text-user-select | User select behavior |
| --non-scrollable-text-color | Text color |
| --non-scrollable-text-justify | Justify content |
| --non-scrollable-text-align | Align items |
| --non-scrollable-text-shadow | Text shadow |
| --non-scrollable-text-font-size | Font size |
| --non-scrollable-text-font-weight | Font weight |
| --non-scrollable-text-font-family | Font family |
| --non-scrollable-text-overflow | Text overflow style |
`}}},argTypes:{compHeight:{control:"text",description:"Height of the component",table:{defaultValue:{summary:"fit-content"},category:"Component"}},compWidth:{control:"text",description:"Width of the component",table:{defaultValue:{summary:"200px"},category:"Component"}},userSelect:{control:"text",description:"User select behavior",table:{defaultValue:{summary:"none"},category:"Component"}},textColor:{control:"color",description:"Text color",table:{defaultValue:{summary:"black"},category:"Text"}},textJustify:{control:"text",description:"Justify text",table:{defaultValue:{summary:"center"},category:"Text"}},textAlign:{control:"text",description:"Align text",table:{defaultValue:{summary:"start"},category:"Text"}},textShadow:{control:"text",description:"Text shadow",table:{defaultValue:{summary:"none"},category:"Text"}},textFontSize:{control:"text",description:"Font size",table:{defaultValue:{summary:"16px"},category:"Text"}},textFontWeight:{control:"text",description:"Font weight",table:{defaultValue:{summary:"normal"},category:"Text"}},textFontFamily:{control:"text",description:"Font family",table:{defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"},category:"Text"}},textOverflow:{control:"text",description:"Text overflow style",table:{defaultValue:{summary:"ellipsis"},category:"Text"}},text:{control:"text",description:"Text content",table:{defaultValue:{summary:"Non-scrollable text example."},category:"Text"}}}},s=t=>p`
  <non-scrollable-text
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .userSelect=${t.userSelect}
    .textColor=${t.textColor}
    .textJustify=${t.textJustify}
    .textAlign=${t.textAlign}
    .textShadow=${t.textShadow}
    .textFontSize=${t.textFontSize}
    .textFontWeight=${t.textFontWeight}
    .textFontFamily=${t.textFontFamily}
    .textOverflow=${t.textOverflow}
    .text=${t.text}
  ></non-scrollable-text>
`;s.args={compHeight:"fit-content",compWidth:"200px",userSelect:"none",textColor:"black",textJustify:"center",textAlign:"start",textShadow:"none",textFontSize:"16px",textFontWeight:"normal",textFontFamily:"'Helvetica', 'Arial', sans-serif",textOverflow:"ellipsis",text:"Non-scrollable text example."};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => html\`
  <non-scrollable-text
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .userSelect=\${args.userSelect}
    .textColor=\${args.textColor}
    .textJustify=\${args.textJustify}
    .textAlign=\${args.textAlign}
    .textShadow=\${args.textShadow}
    .textFontSize=\${args.textFontSize}
    .textFontWeight=\${args.textFontWeight}
    .textFontFamily=\${args.textFontFamily}
    .textOverflow=\${args.textOverflow}
    .text=\${args.text}
  ></non-scrollable-text>
\``,...s.parameters?.docs?.source}}};const v=["Default"];export{s as Default,v as __namedExportsOrder,S as default};
