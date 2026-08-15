import{i as d,a as c,x as m}from"./iframe-CePmm_jb.js";import{n,t as g}from"./property-bLZeg_ry.js";var h=Object.defineProperty,v=Object.getOwnPropertyDescriptor,f=(t,e,i)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,o=(t,e,i,r)=>{for(var l=r>1?void 0:r?v(e,i):e,p=t.length-1,u;p>=0;p--)(u=t[p])&&(l=(r?u(e,i,l):u(l))||l);return r&&l&&h(e,i,l),l},y=(t,e,i)=>f(t,e+"",i);let a=class extends c{updateStyleVariable(t,e,i){const r=this[t]??i;this.style.setProperty(e,r)}updated(t){const e=(i,r,l)=>t.has(i)&&this.updateStyleVariable(i,r,l);e("contMinHeight","--stat-table-cont-min-height","100px"),e("contMinWidth","--stat-table-cont-min-width","200px"),e("contMaxHeight","--stat-table-cont-max-height","400px"),e("contMaxWidth","--stat-table-cont-max-width","200px"),e("contStatsGap","--stat-table-cont-stats-gap","2px"),e("contOverflowY","--stat-table-cont-overflow-y","auto"),e("contOverflowX","--stat-table-cont-overflow-x","hidden"),e("statHeight","--stat-table-stat-height","fit-content"),e("statWidth","--stat-table-stat-width","100%"),e("statNameValueGap","--stat-table-stat-name-value-gap","1px"),e("statPadX","--stat-table-stat-pad-x","10px"),e("statPadY","--stat-table-stat-pad-y","5px"),e("statBgColor","--stat-table-stat-bg-color","#cfd8dc"),e("statBorderRadius","--stat-table-stat-border-radius","3px"),e("nameContHeight","--stat-table-name-cont-height","fit-content"),e("nameFontSize","--stat-table-name-font-size","17px"),e("nameLineHeight","--stat-table-name-line-height","20px"),e("nameFontWeight","--stat-table-name-font-weight","normal"),e("nameFontFamily","--stat-table-name-font-family","'FiraMono', sans-serif"),e("nameOverflowX","--stat-table-name-overflow-x","auto"),e("valueContHeight","--stat-table-value-cont-height","fit-content"),e("valueFontSize","--stat-table-value-font-size","17px"),e("valueLineHeight","--stat-table-value-line-height","20px"),e("valueFontWeight","--stat-table-value-font-weight","normal"),e("valueFontFamily","--stat-table-value-font-family","'FiraMono', sans-serif"),e("valueOverflowX","--stat-table-value-overflow-x","auto")}render(){return m`
      ${this.stats?this.stats.map(t=>m`
              <div>
                <span id="name" style="width: ${t.nameWidth};"
                  >${t.name}${this.separator??":"}
                </span>
                <span id="value" style="width: ${t.valueWidth}"
                  >${t.value}</span
                >
              </div>
            `):null}
    `}};y(a,"styles",d`
    :host {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      min-height: var(--stat-table-cont-min-height, 100px);
      min-width: var(--stat-table-cont-min-width, 200px);
      max-height: var(--stat-table-cont-max-height, 400px);
      max-width: var(--stat-table-cont-max-width, 200px);
      gap: var(--stat-table-cont-stats-gap, 2px);
      overflow-y: var(--stat-table-cont-overflow-y, auto);
      overflow-x: var(--stat-table-cont-overflow-x, hidden);
    }

    div {
      display: flex;
      height: var(--stat-table-stat-height, fit-content);
      width: var(--stat-table-stat-width, 100%);
      gap: var(--stat-table-stat-name-value-gap, 1px);
      justify-content: var(--stat-table-stat-justify, space-between);
      align-items: var(--stat-table-stat-align, center);
      padding: var(--stat-table-stat-pad-y, 5px)
        var(--stat-table-stat-pad-x, 10px);
      box-sizing: border-box;
      overflow-y: var(--stat-table-stat-overflow-y, hidden);
      overflow-x: var(--stat-table-stat-overflow-x, hidden);
      background-color: var(--stat-table-stat-bg-color, #cfd8dc);
      border-radius: var(--stat-table-stat-border-radius, 3px);
      flex-shrink: 0;
    }

    #name {
      height: var(--stat-table-name-cont-height, fit-content);
      wrap: nowrap;
      text-align: left;
      font-size: var(--stat-table-name-font-size, 17px);
      line-height: var(--stat-table-name-line-height, 20px);
      font-weight: var(--stat-table-name-font-weight, normal);
      font-family: var(--stat-table-name-font-family, 'FiraMono', sans-serif);
      overflow-x: var(--stat-table-name-overflow-x, auto);
      overflow-y: hidden;
      user-select: none;
    }

    #value {
      height: var(--stat-table-value-cont-height, fit-content);
      wrap: nowrap;
      text-align: right;
      font-size: var(--stat-table-value-font-size, 17px);
      line-height: var(--stat-table-value-line-height, 20px);
      font-weight: var(--stat-table-value-font-weight, normal);
      font-family: var(--stat-table-value-font-family, 'FiraMono', sans-serif);
      overflow-x: var(--stat-table-value-overflow-x, auto);
      overflow-y: hidden;
      user-select: none;
    }
  `);o([n({attribute:!1})],a.prototype,"stats",2);o([n({type:String})],a.prototype,"separator",2);o([n({type:String})],a.prototype,"contMinHeight",2);o([n({type:String})],a.prototype,"contMinWidth",2);o([n({type:String})],a.prototype,"contMaxHeight",2);o([n({type:String})],a.prototype,"contMaxWidth",2);o([n({type:String})],a.prototype,"contStatsGap",2);o([n({type:String})],a.prototype,"contOverflowY",2);o([n({type:String})],a.prototype,"contOverflowX",2);o([n({type:String})],a.prototype,"statHeight",2);o([n({type:String})],a.prototype,"statWidth",2);o([n({type:String})],a.prototype,"statNameValueGap",2);o([n({type:String})],a.prototype,"statPadX",2);o([n({type:String})],a.prototype,"statPadY",2);o([n({type:String})],a.prototype,"statBgColor",2);o([n({type:String})],a.prototype,"statBorderRadius",2);o([n({type:String})],a.prototype,"nameContHeight",2);o([n({type:String})],a.prototype,"nameFontSize",2);o([n({type:String})],a.prototype,"nameLineHeight",2);o([n({type:String})],a.prototype,"nameFontWeight",2);o([n({type:String})],a.prototype,"nameFontFamily",2);o([n({type:String})],a.prototype,"nameOverflowX",2);o([n({type:String})],a.prototype,"valueContHeight",2);o([n({type:String})],a.prototype,"valueFontSize",2);o([n({type:String})],a.prototype,"valueLineHeight",2);o([n({type:String})],a.prototype,"valueFontWeight",2);o([n({type:String})],a.prototype,"valueFontFamily",2);o([n({type:String})],a.prototype,"valueOverflowX",2);a=o([g("stat-table")],a);const w={title:"Components/Text/Stat Table",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<stat-table>`\n\nComponent for rendering a vertical list of labeled statistics.\n\n#### Props\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `stats` | `{ name, value, nameWidth, valueWidth }[]` | Stat entries to display |\n| `separator` | `string` | Separator to display between name and value |\n#### CSS Custom Properties\n\n| Variable                              | Description                          |\n|----------------------------------------|--------------------------------------|\n| `--stat-table-cont-min-height`      | Container min height                 |\n| `--stat-table-cont-min-width`       | Container min width                  |\n| `--stat-table-cont-max-height`      | Container max height                 |\n| `--stat-table-cont-max-width`       | Container max width                  |\n| `--stat-table-cont-stats-gap`       | Gap between rows                     |\n| `--stat-table-cont-overflow-y`      | Container overflow-y                 |\n| `--stat-table-cont-overflow-x`      | Container overflow-x                 |\n| `--stat-table-stat-height`          | Row height                           |\n| `--stat-table-stat-width`           | Row width                            |\n| `--stat-table-stat-name-value-gap`  | Gap between name and value           |\n| `--stat-table-stat-pad-x`           | Row horizontal padding               |\n| `--stat-table-stat-pad-y`           | Row vertical padding                 |\n| `--stat-table-stat-bg-color`        | Row background color                 |\n| `--stat-table-stat-border-radius`   | Row border radius                    |\n| `--stat-table-name-cont-height`     | Name span height                     |\n| `--stat-table-name-font-size`       | Name font size                       |\n| `--stat-table-name-line-height`     | Name line height                     |\n| `--stat-table-name-font-weight`     | Name font weight                     |\n| `--stat-table-name-font-family`     | Name font family                     |\n| `--stat-table-name-overflow-x`      | Name overflow-x                      |\n| `--stat-table-value-cont-height`    | Value span height                    |\n| `--stat-table-value-font-size`      | Value font size                      |\n| `--stat-table-value-line-height`    | Value line height                    |\n| `--stat-table-value-font-weight`    | Value font weight                    |\n| `--stat-table-value-font-family`    | Value font family                    |\n| `--stat-table-value-overflow-x`     | Value overflow-x                     |\n                "}}},argTypes:{stats:{control:"object",description:`Array of stat entries: 

 { name: String, value: String, nameWidth: String, valueWidth: String } 

 name is the stat name to render, value is the stat value to render, and nameWidth/valueWidth are css width values for the name and value spans.`,table:{category:"Data",defaultValue:{summary:"[]"}}},separator:{control:"text",description:"Separator to display between name and value",table:{category:"Data",defaultValue:{summary:":"}}},contMinHeight:{control:"text",description:"Container min-height",table:{category:"Container",defaultValue:{summary:"100px"}}},contMinWidth:{control:"text",description:"Container min-width",table:{category:"Container",defaultValue:{summary:"200px"}}},contMaxHeight:{control:"text",description:"Container max-height",table:{category:"Container",defaultValue:{summary:"400px"}}},contMaxWidth:{control:"text",description:"Container max-width",table:{category:"Container",defaultValue:{summary:"200px"}}},contStatsGap:{control:"text",description:"Gap between rows",table:{category:"Container",defaultValue:{summary:"2px"}}},contOverflowY:{control:"text",description:"Container overflow-y",table:{category:"Container",defaultValue:{summary:"auto"}}},contOverflowX:{control:"text",description:"Container overflow-x",table:{category:"Container",defaultValue:{summary:"hidden"}}},statHeight:{control:"text",description:"Row height",table:{category:"Row",defaultValue:{summary:"fit-content"}}},statWidth:{control:"text",description:"Row width",table:{category:"Row",defaultValue:{summary:"100%"}}},statNameValueGap:{control:"text",description:"Gap between name and value",table:{category:"Row",defaultValue:{summary:"1px"}}},statPadX:{control:"text",description:"Row horizontal padding",table:{category:"Row",defaultValue:{summary:"10px"}}},statPadY:{control:"text",description:"Row vertical padding",table:{category:"Row",defaultValue:{summary:"5px"}}},statBgColor:{control:"color",description:"Row background color",table:{category:"Row",defaultValue:{summary:"#cfd8dc"}}},statBorderRadius:{control:"text",description:"Row border radius",table:{category:"Row",defaultValue:{summary:"3px"}}},nameContHeight:{control:"text",description:"Name span height",table:{category:"Name Text",defaultValue:{summary:"fit-content"}}},nameFontSize:{control:"text",description:"Name font size",table:{category:"Name Text",defaultValue:{summary:"17px"}}},nameLineHeight:{control:"text",description:"Name line height",table:{category:"Name Text",defaultValue:{summary:"20px"}}},nameFontWeight:{control:"text",description:"Name font weight",table:{category:"Name Text",defaultValue:{summary:"normal"}}},nameFontFamily:{control:"text",description:"Name font family",table:{category:"Name Text",defaultValue:{summary:"'FiraMono', sans-serif"}}},nameOverflowX:{control:"text",description:"Name overflow-x",table:{category:"Name Text",defaultValue:{summary:"auto"}}},valueContHeight:{control:"text",description:"Value span height",table:{category:"Value Text",defaultValue:{summary:"fit-content"}}},valueFontSize:{control:"text",description:"Value font size",table:{category:"Value Text",defaultValue:{summary:"17px"}}},valueLineHeight:{control:"text",description:"Value line height",table:{category:"Value Text",defaultValue:{summary:"20px"}}},valueFontWeight:{control:"text",description:"Value font weight",table:{category:"Value Text",defaultValue:{summary:"normal"}}},valueFontFamily:{control:"text",description:"Value font family",table:{category:"Value Text",defaultValue:{summary:"'FiraMono', sans-serif"}}},valueOverflowX:{control:"text",description:"Value overflow-x",table:{category:"Value Text",defaultValue:{summary:"auto"}}}}},s=t=>m`
  <stat-table
    .stats=${t.stats}
    .separator=${t.separator}
    .contMinHeight=${t.contMinHeight}
    .contMinWidth=${t.contMinWidth}
    .contMaxHeight=${t.contMaxHeight}
    .contMaxWidth=${t.contMaxWidth}
    .contStatsGap=${t.contStatsGap}
    .contOverflowY=${t.contOverflowY}
    .contOverflowX=${t.contOverflowX}
    .statHeight=${t.statHeight}
    .statWidth=${t.statWidth}
    .statNameValueGap=${t.statNameValueGap}
    .statPadX=${t.statPadX}
    .statPadY=${t.statPadY}
    .statBgColor=${t.statBgColor}
    .statBorderRadius=${t.statBorderRadius}
    .nameContHeight=${t.nameContHeight}
    .nameFontSize=${t.nameFontSize}
    .nameLineHeight=${t.nameLineHeight}
    .nameFontWeight=${t.nameFontWeight}
    .nameFontFamily=${t.nameFontFamily}
    .nameOverflowX=${t.nameOverflowX}
    .valueContHeight=${t.valueContHeight}
    .valueFontSize=${t.valueFontSize}
    .valueLineHeight=${t.valueLineHeight}
    .valueFontWeight=${t.valueFontWeight}
    .valueFontFamily=${t.valueFontFamily}
    .valueOverflowX=${t.valueOverflowX}
  ></stat-table>
`;s.args={stats:[{name:"HP",value:"45",nameWidth:"50%",valueWidth:"50%"},{name:"Attack",value:"18",nameWidth:"50%",valueWidth:"50%"},{name:"Defense",value:"12",nameWidth:"50%",valueWidth:"50%"},{name:"Speed",value:"26",nameWidth:"50%",valueWidth:"50%"}],separator:":",contMinHeight:"100px",contMinWidth:"200px",contMaxHeight:"400px",contMaxWidth:"200px",contStatsGap:"2px",contOverflowY:"auto",contOverflowX:"hidden",statHeight:"fit-content",statWidth:"100%",statNameValueGap:"1px",statPadX:"10px",statPadY:"5px",statBgColor:"#cfd8dc",statBorderRadius:"3px",nameContHeight:"fit-content",nameFontSize:"17px",nameLineHeight:"20px",nameFontWeight:"normal",nameFontFamily:"'FiraMono', sans-serif",nameOverflowX:"auto",valueContHeight:"fit-content",valueFontSize:"17px",valueLineHeight:"20px",valueFontWeight:"normal",valueFontFamily:"'FiraMono', sans-serif",valueOverflowX:"auto"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => html\`
  <stat-table
    .stats=\${args.stats}
    .separator=\${args.separator}
    .contMinHeight=\${args.contMinHeight}
    .contMinWidth=\${args.contMinWidth}
    .contMaxHeight=\${args.contMaxHeight}
    .contMaxWidth=\${args.contMaxWidth}
    .contStatsGap=\${args.contStatsGap}
    .contOverflowY=\${args.contOverflowY}
    .contOverflowX=\${args.contOverflowX}
    .statHeight=\${args.statHeight}
    .statWidth=\${args.statWidth}
    .statNameValueGap=\${args.statNameValueGap}
    .statPadX=\${args.statPadX}
    .statPadY=\${args.statPadY}
    .statBgColor=\${args.statBgColor}
    .statBorderRadius=\${args.statBorderRadius}
    .nameContHeight=\${args.nameContHeight}
    .nameFontSize=\${args.nameFontSize}
    .nameLineHeight=\${args.nameLineHeight}
    .nameFontWeight=\${args.nameFontWeight}
    .nameFontFamily=\${args.nameFontFamily}
    .nameOverflowX=\${args.nameOverflowX}
    .valueContHeight=\${args.valueContHeight}
    .valueFontSize=\${args.valueFontSize}
    .valueLineHeight=\${args.valueLineHeight}
    .valueFontWeight=\${args.valueFontWeight}
    .valueFontFamily=\${args.valueFontFamily}
    .valueOverflowX=\${args.valueOverflowX}
  ></stat-table>
\``,...s.parameters?.docs?.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,w as default};
