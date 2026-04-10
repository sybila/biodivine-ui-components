import{i as m,a as h,x as d}from"./iframe-CNzkdUiO.js";import{n as o,t as p}from"./property-n1MvSguL.js";var y=Object.defineProperty,g=Object.getOwnPropertyDescriptor,x=(t,e,r)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,n=(t,e,r,l)=>{for(var i=l>1?void 0:l?g(e,r):e,c=t.length-1,u;c>=0;c--)(u=t[c])&&(i=(l?u(e,r,i):u(i))||i);return l&&i&&y(e,r,i),i},f=(t,e,r)=>x(t,e+"",r);let a=class extends h{updateStyleVariable(t,e,r){const l=this[t]??r;this.style.setProperty(e,l)}updated(t){const e=(r,l,i)=>t.has(r)&&this.updateStyleVariable(r,l,i);e("compHeight","--stat-entry-comp-height","fit-content"),e("compWidth","--stat-entry-comp-width","50px"),e("valNameGap","--stat-entry-name-value-gap","15px"),e("contHeight","--stat-entry-cont-height","fit-content"),e("contWidth","--stat-entry-cont-width","100%"),e("contJustify","--stat-entry-justify-content","space-between"),e("contAlign","--stat-entry-align-items","safe center"),e("contPadX","--stat-entry-padding-x","5px"),e("contBgColor","--stat-entry-bg-color","#cfd8dc"),e("contBorderRadius","--stat-entry-border-radius","3px"),e("nameHeight","--stat-entry-name-height","auto"),e("nameMaxHeight","--stat-entry-name-max-height","fit-content"),e("nameWidth","--stat-entry-name-width","auto"),e("nameMaxWidth","--stat-entry-name-max-width","50%"),e("nameJustify","--stat-entry-name-justify-content","safe center"),e("nameOverflowX","--stat-entry-name-overflow-x","hidden"),e("valueHeight","--stat-entry-value-height","auto"),e("valueMaxHeight","--stat-entry-value-max-height","fit-content"),e("valueWidth","--stat-entry-value-width","auto"),e("valueMaxWidth","--stat-entry-value-max-width","50%"),e("valueJustify","--stat-entry-value-justify-content","safe center"),e("valueOverflowX","--stat-entry-value-overflow-x","auto"),e("lineHeight","--stat-entry-line-height","20px"),e("textFontSize","--stat-entry-font-size","17px"),e("textFontWeight","--stat-entry-font-weight","normal"),e("textFontFamily","--stat-entry-font-family","'FiraMono', sans-serif"),e("textColor","--stat-entry-color","black"),e("textShadow","--stat-entry-text-shadow","0px 2px 5px #d0d0d0"),e("textTransform","--stat-entry-text-transform","none")}render(){return d`<div>
      <span id="name" part="name"
        >${(this.statName??"")+(this.addColon?" :":"")}</span
      ><span id="value" part="value"
        >${this.statValue&&this.statValue!=""?this.statValue:"–"}</span
      >
    </div>`}};f(a,"styles",m`
    :host {
      display: inline-block;
      height: var(--stat-entry-comp-height, fit-content);
      width: var(--stat-entry-comp-width, 50px);
      max-height: var(--stat-entry-comp-height, fit-content);
      max-width: var(--stat-entry-comp-width, 50px);
    }

    div {
      display: flex;
      width: var(--stat-entry-cont-width, 100%);
      height: var(--stat-entry-cont-height, fit-content);
      justify-content: var(--stat-entry-justify-content, space-between);
      align-items: var(--stat-entry-align-items, center);
      box-sizing: border-box;
      gap: var(--stat-entry-name-value-gap, 15px);
      padding-inline: var(--stat-entry-padding-x, 5px);
      background-color: var(--stat-entry-bg-color, #cfd8dc);
      border-radius: var(--stat-entry-border-radius, 3px);
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      white-space: nowrap;
      line-height: var(--stat-entry-line-height, 20px);
      font-size: var(--stat-entry-font-size, 17px);
      font-weight: var(--stat-entry-font-weight, normal);
      font-family: var(--stat-entry-font-family, 'FiraMono', sans-serif);
      text-shadow: var(--stat-entry-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--stat-entry-color, black);
      text-transform: var(--stat-entry-text-transform, none);
      cursor: default;
    }

    #name {
      height: var(--stat-entry-name-height, auto);
      width: var(--stat-entry-name-width, auto);
      max-height: var(--stat-entry-name-max-height, fit-content);
      max-width: var(--stat-entry-name-max-width, 50%);
      justify-content: var(--stat-entry-name-justify-content, safe center);
      overflow-x: var(--stat-entry-name-overflow-x, hidden);
    }

    #value {
      height: var(--stat-entry-value-height, auto);
      width: var(--stat-entry-value-width, auto);
      max-height: var(--stat-entry-value-max-height, fit-content);
      max-width: var(--stat-entry-value-max-width, 50%);
      justify-content: var(--stat-entry-value-justify-content, safe center);
      overflow-x: var(--stat-entry-value-overflow-x, auto);
    }
  `);n([o({type:String})],a.prototype,"compHeight",2);n([o({type:String})],a.prototype,"compWidth",2);n([o({type:String})],a.prototype,"contHeight",2);n([o({type:String})],a.prototype,"contWidth",2);n([o({type:String})],a.prototype,"contJustify",2);n([o({type:String})],a.prototype,"contAlign",2);n([o({type:String})],a.prototype,"contPadX",2);n([o({type:String})],a.prototype,"contBgColor",2);n([o({type:String})],a.prototype,"contBorderRadius",2);n([o({type:String})],a.prototype,"valNameGap",2);n([o({type:String})],a.prototype,"statName",2);n([o({type:String})],a.prototype,"statValue",2);n([o({type:String})],a.prototype,"nameHeight",2);n([o({type:String})],a.prototype,"nameMaxHeight",2);n([o({type:String})],a.prototype,"nameWidth",2);n([o({type:String})],a.prototype,"nameMaxWidth",2);n([o({type:String})],a.prototype,"nameJustify",2);n([o({type:String})],a.prototype,"nameOverflowX",2);n([o({type:Boolean})],a.prototype,"addColon",2);n([o({type:String})],a.prototype,"valueHeight",2);n([o({type:String})],a.prototype,"valueMaxHeight",2);n([o({type:String})],a.prototype,"valueWidth",2);n([o({type:String})],a.prototype,"valueMaxWidth",2);n([o({type:String})],a.prototype,"valueJustify",2);n([o({type:String})],a.prototype,"valueOverflowX",2);n([o({type:String})],a.prototype,"lineHeight",2);n([o({type:String})],a.prototype,"textFontSize",2);n([o({type:String})],a.prototype,"textFontWeight",2);n([o({type:String})],a.prototype,"textFontFamily",2);n([o({type:String})],a.prototype,"textColor",2);n([o({type:String})],a.prototype,"textShadow",2);n([o({type:String})],a.prototype,"textTransform",2);a=n([p("stat-entry")],a);const b={title:"Components/Text/Stat Entry",tags:["autodocs"],parameters:{docs:{description:{component:'\n### `<stat-entry>`\n\nComponent for displaying a labeled statistic (like "HP: 45").\n\n#### CSS Custom Properties\n\n| Variable                              | Description                    |\n|----------------------------------------|--------------------------------|\n| `--stat-entry-comp-height`           | Component height               |\n| `--stat-entry-comp-width`            | Component width                |\n| `--stat-entry-cont-height`           | Container height               |\n| `--stat-entry-cont-width`            | Container width                |\n| `--stat-entry-justify-content`       | Flex container justify         |\n| `--stat-entry-align-items`           | Flex container align           |\n| `--stat-entry-name-value-gap`        | Gap between name and value     |\n| `--stat-entry-padding-x`             | Horizontal container padding   |\n| `--stat-entry-bg-color`              | Container background color     |\n| `--stat-entry-border-radius`         | Container border radius        |\n| `--stat-entry-name-height`           | Name section height            |\n| `--stat-entry-name-max-height`       | Name section max height        |\n| `--stat-entry-name-width`            | Name section width             |\n| `--stat-entry-name-max-width`        | Name section max width         |\n| `--stat-entry-name-justify-content`  | Name text justify              |\n| `--stat-entry-name-overflow-x`       | Name overflow-x                |\n| `--stat-entry-value-height`          | Value section height           |\n| `--stat-entry-value-max-height`      | Value section max height       |\n| `--stat-entry-value-width`           | Value section width            |\n| `--stat-entry-value-max-width`       | Value section max width        |\n| `--stat-entry-value-justify-content` | Value text justify             |\n| `--stat-entry-value-overflow-x`      | Value overflow-x               |\n| `--stat-entry-line-height`           | Line height of text            |\n| `--stat-entry-font-size`             | Font size                      |\n| `--stat-entry-font-weight`           | Font weight                    |\n| `--stat-entry-font-family`           | Font family                    |\n| `--stat-entry-color`                 | Text color                     |\n| `--stat-entry-text-shadow`           | Text shadow                    |\n| `--stat-entry-text-transform`        | Text transform                 |\n\n#### Shadow DOM Parts\n\n| Part Name | Element | Description         |\n|-----------|---------|---------------------|\n| `container` | `div`   | The main container  |\n| `name`   | `span`  | The stat name span   |\n| `value`  | `span`  | The stat value span  |\n        '}}},argTypes:{compHeight:{control:"text",description:"Component height",table:{category:"Layout",defaultValue:{summary:"fit-content"}}},compWidth:{control:"text",description:"Component width",table:{category:"Layout",defaultValue:{summary:"fit-content"}}},contHeight:{control:"text",description:"Container height",table:{category:"Container",defaultValue:{summary:"fit-content"}}},contWidth:{control:"text",description:"Container width",table:{category:"Container",defaultValue:{summary:"100%"}}},contJustify:{control:"text",description:"Container justify-content",table:{category:"Container",defaultValue:{summary:"space-between"}}},contAlign:{control:"text",description:"Container align-items",table:{category:"Container",defaultValue:{summary:"center"}}},contPadX:{control:"text",description:"Horizontal container padding",table:{category:"Container",defaultValue:{summary:"5px"}}},contBgColor:{control:"color",description:"Container background color",table:{category:"Container",defaultValue:{summary:"#cfd8dc"}}},contBorderRadius:{control:"text",description:"Container border radius",table:{category:"Container",defaultValue:{summary:"3px"}}},valNameGap:{control:"text",description:"Gap between name and value",table:{category:"Content",defaultValue:{summary:"15px"}}},statName:{control:"text",description:"Stat name label",table:{category:"Content",defaultValue:{summary:""}}},statValue:{control:"text",description:"Stat value",table:{category:"Content",defaultValue:{summary:"–"}}},nameHeight:{control:"text",description:"Name section height",table:{category:"Name",defaultValue:{summary:"auto"}}},nameMaxHeight:{control:"text",description:"Name section max height",table:{category:"Name",defaultValue:{summary:"fit-content"}}},nameWidth:{control:"text",description:"Name section width",table:{category:"Name",defaultValue:{summary:"auto"}}},nameMaxWidth:{control:"text",description:"Name section max width",table:{category:"Name",defaultValue:{summary:"50%"}}},nameJustify:{control:"text",description:"Name text justify-content",table:{category:"Name",defaultValue:{summary:"safe center"}}},nameOverflowX:{control:"text",description:"Name overflow-x",table:{category:"Name",defaultValue:{summary:"hidden"}}},addColon:{control:"boolean",description:"Add colon after stat name",table:{category:"Content",defaultValue:{summary:"false"}}},valueHeight:{control:"text",description:"Value section height",table:{category:"Value",defaultValue:{summary:"auto"}}},valueMaxHeight:{control:"text",description:"Value section max height",table:{category:"Value",defaultValue:{summary:"fit-content"}}},valueWidth:{control:"text",description:"Value section width",table:{category:"Value",defaultValue:{summary:"auto"}}},valueMaxWidth:{control:"text",description:"Value section max width",table:{category:"Value",defaultValue:{summary:"50%"}}},valueJustify:{control:"text",description:"Value text justify-content",table:{category:"Value",defaultValue:{summary:"safe center"}}},valueOverflowX:{control:"text",description:"Value overflow-x",table:{category:"Value",defaultValue:{summary:"auto"}}},lineHeight:{control:"text",description:"Line height of text",table:{category:"Text",defaultValue:{summary:"20px"}}},textFontSize:{control:"text",description:"Font size",table:{category:"Text",defaultValue:{summary:"17px"}}},textFontWeight:{control:"text",description:"Font weight",table:{category:"Text",defaultValue:{summary:"normal"}}},textFontFamily:{control:"text",description:"Font family",table:{category:"Text",defaultValue:{summary:"'FiraMono', sans-serif"}}},textColor:{control:"color",description:"Text color",table:{category:"Text",defaultValue:{summary:"black"}}},textShadow:{control:"text",description:"Text shadow",table:{category:"Text",defaultValue:{summary:"0px 2px 5px #d0d0d0"}}},textTransform:{control:"text",description:"Text transformation (e.g., uppercase, lowercase)",table:{category:"Text",defaultValue:{summary:"none"}}}}},s=t=>d`
  <stat-entry
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .contHeight=${t.contHeight}
    .contWidth=${t.contWidth}
    .contJustify=${t.contJustify}
    .contAlign=${t.contAlign}
    .contPadX=${t.contPadX}
    .contBgColor=${t.contBgColor}
    .contBorderRadius=${t.contBorderRadius}
    .valNameGap=${t.valNameGap}
    .statName=${t.statName}
    .statValue=${t.statValue}
    .nameHeight=${t.nameHeight}
    .nameMaxHeight=${t.nameMaxHeight}
    .nameWidth=${t.nameWidth}
    .nameMaxWidth=${t.nameMaxWidth}
    .nameJustify=${t.nameJustify}
    .nameOverflowX=${t.nameOverflowX}
    .addColon=${t.addColon}
    .valueHeight=${t.valueHeight}
    .valueMaxHeight=${t.valueMaxHeight}
    .valueWidth=${t.valueWidth}
    .valueMaxWidth=${t.valueMaxWidth}
    .valueJustify=${t.valueJustify}
    .valueOverflowX=${t.valueOverflowX}
    .lineHeight=${t.lineHeight}
    .textFontSize=${t.textFontSize}
    .textFontWeight=${t.textFontWeight}
    .textFontFamily=${t.textFontFamily}
    .textColor=${t.textColor}
    .textShadow=${t.textShadow}
    .textTransform=${t.textTransform}
  ></stat-entry>
`;s.args={compHeight:"fit-content",compWidth:"fit-content",contHeight:"fit-content",contWidth:"100%",contJustify:"space-between",contAlign:"center",contPadX:"5px",contBgColor:"#cfd8dc",contBorderRadius:"3px",valNameGap:"15px",statName:"HP",statValue:"45",nameHeight:"auto",nameMaxHeight:"fit-content",nameWidth:"auto",nameMaxWidth:"50%",nameJustify:"safe center",nameOverflowX:"hidden",addColon:!0,valueHeight:"auto",valueMaxHeight:"fit-content",valueWidth:"auto",valueMaxWidth:"50%",valueJustify:"safe center",valueOverflowX:"auto",lineHeight:"20px",textFontSize:"17px",textFontWeight:"normal",textFontFamily:"'FiraMono', sans-serif",textColor:"black",textShadow:"0px 2px 5px #d0d0d0",textTransform:"none"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => html\`
  <stat-entry
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .contHeight=\${args.contHeight}
    .contWidth=\${args.contWidth}
    .contJustify=\${args.contJustify}
    .contAlign=\${args.contAlign}
    .contPadX=\${args.contPadX}
    .contBgColor=\${args.contBgColor}
    .contBorderRadius=\${args.contBorderRadius}
    .valNameGap=\${args.valNameGap}
    .statName=\${args.statName}
    .statValue=\${args.statValue}
    .nameHeight=\${args.nameHeight}
    .nameMaxHeight=\${args.nameMaxHeight}
    .nameWidth=\${args.nameWidth}
    .nameMaxWidth=\${args.nameMaxWidth}
    .nameJustify=\${args.nameJustify}
    .nameOverflowX=\${args.nameOverflowX}
    .addColon=\${args.addColon}
    .valueHeight=\${args.valueHeight}
    .valueMaxHeight=\${args.valueMaxHeight}
    .valueWidth=\${args.valueWidth}
    .valueMaxWidth=\${args.valueMaxWidth}
    .valueJustify=\${args.valueJustify}
    .valueOverflowX=\${args.valueOverflowX}
    .lineHeight=\${args.lineHeight}
    .textFontSize=\${args.textFontSize}
    .textFontWeight=\${args.textFontWeight}
    .textFontFamily=\${args.textFontFamily}
    .textColor=\${args.textColor}
    .textShadow=\${args.textShadow}
    .textTransform=\${args.textTransform}
  ></stat-entry>
\``,...s.parameters?.docs?.source}}};const $=["Default"];export{s as Default,$ as __namedExportsOrder,b as default};
