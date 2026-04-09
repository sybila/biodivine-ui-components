import{i as l,a as g,x as u}from"./iframe-CJP2tw7y.js";import{n as i,t as s}from"./property-BC_1d1tv.js";import"./icon-button-DbHG5ZZn.js";var d=Object.defineProperty,m=Object.getOwnPropertyDescriptor,y=(t,o,p)=>o in t?d(t,o,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[o]=p,r=(t,o,p,n)=>{for(var a=n>1?void 0:n?m(o,p):o,b=t.length-1,h;b>=0;b--)(h=t[b])&&(a=(n?h(o,p,a):h(a))||a);return n&&a&&d(o,p,a),a},f=(t,o,p)=>y(t,o+"",p);let e=class extends g{updateStyleVariable(t,o,p){const n=this[t]??p;this.style.setProperty(o,n)}updated(t){const o=(p,n,a)=>t.has(p)&&this.updateStyleVariable(p,n,a);o("compHeight","--pop-up-bar-comp-height","fit-content"),o("compWidth","--pop-up-bar-comp-width","fit-content"),o("barHeight","--pop-up-bar-height","100px"),o("barWidth","--pop-up-bar-width","fit-content"),o("barColor","--pop-up-bar-color","#eceff1"),o("barShadow","--pop-up-bar-shadow","0px 2px 5px #d0d0d0"),o("butHeight","--pop-up-bar-button-height","30px"),o("butWidth","--pop-up-bar-button-width","200px"),o("butColor","--pop-up-bar-button-color","#eceff1"),o("butHoverColor","--pop-up-bar-button-hover-color","#cfd8dc"),o("butShadow","--pop-up-bar-button-shadow","0px 2px 5px #d0d0d0"),o("gapSize","--pop-up-bar-gap","10px"),o("iconHeight","--pop-up-bar-icon-height","70%"),o("iconWidth","--pop-up-bar-icon-width","70%")}render(){return u`
      <div id="container" part="container">
        <div id="display-button" part="button">
          ${this.iconSrc?u`<img
                part="icon"
                src="${this.iconSrc}"
                alt="${this.iconAlt??"icon"}"
              />`:u`<span id="arrow-up" part="arrow">^</span>`}
        </div>
        <div id="bar-container" part="bar-container">
          <div id="bar" part="bar">
            <slot></slot>
          </div>
        </div>
      </div>
    `}};f(e,"styles",l`
    :host {
      display: inline-block;
      height: var(--pop-up-bar-comp-height, fit-content);
      width: var(--pop-up-bar-comp-width, fit-content);
      max-height: var(--pop-up-bar-comp-height, fit-content);
      max-width: var(--pop-up-bar-comp-width, fit-content);
      pointer-events: none;
    }

    #container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: end;
      align-items: center;
      pointer-events: none;
    }

    #bar {
      margin-bottom: var(--pop-up-bar-gap, 10px);
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--pop-up-bar-height, 100px);
      width: var(--pop-up-bar-width, fit-content);
      overflow: auto;
      box-sizing: border-box;
      padding: 0 10px;
      border: none;
      border-radius: 10px;
      box-shadow: var(--pop-up-bar-shadow, 0px 2px 5px #d0d0d0);
      background-color: var(--pop-up-bar-color, #eceff1);
      pointer-events: auto;
    }

    #bar-container {
      opacity: 0;
      height: calc(
        var(--pop-up-bar-height, 100px) + var(--pop-up-bar-gap, 10px)
      );
      width: var(--pop-up-bar-width, fit-content);
      visibility: hidden;
      transition:
        opacity 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
      pointer-events: none;
    }

    #bar-container:hover {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    slot {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    #display-button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--pop-up-bar-button-height, 30px);
      width: var(--pop-up-bar-button-width, 200px);
      border-radius: 10px;
      box-shadow: var(--pop-up-bar-button-shadow, 0px 2px 5px #d0d0d0);
      background-color: var(--pop-up-bar-button-color, #eceff1);
      cursor: pointer;
      pointer-events: auto;
    }

    #display-button:hover {
      background-color: var(--pop-up-bar-button-hover-color, #cfd8dc);
    }

    #display-button:hover + #bar-container {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    img {
      height: var(--pop-up-bar-icon-height, 70%);
      width: var(--pop-up-bar-icon-width, 70%);
    }

    #arrow-up {
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
      font-family: 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--pop-up-bar-icon-height, 90%);
      width: var(--pop-up-bar-icon-width, 90%);
    }
  `);r([i({type:String})],e.prototype,"compHeight",2);r([i({type:String})],e.prototype,"compWidth",2);r([i({type:String})],e.prototype,"barHeight",2);r([i({type:String})],e.prototype,"barWidth",2);r([i({type:String})],e.prototype,"barColor",2);r([i({type:String})],e.prototype,"barShadow",2);r([i({type:String})],e.prototype,"butHeight",2);r([i({type:String})],e.prototype,"butWidth",2);r([i({type:String})],e.prototype,"butColor",2);r([i({type:String})],e.prototype,"butHoverColor",2);r([i({type:String})],e.prototype,"butShadow",2);r([i({type:String})],e.prototype,"iconHeight",2);r([i({type:String})],e.prototype,"iconWidth",2);r([i({type:String})],e.prototype,"iconSrc",2);r([i({type:String})],e.prototype,"iconAlt",2);r([i({type:String})],e.prototype,"gapSize",2);e=r([s("pop-up-bar")],e);const S={title:"Components/Content Panels/Pop-Up Bar",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<pop-up-bar>`\n\nA button that reveals a horizontal bar of slot content (e.g., icons) when hovered.\n\n#### CSS Custom Properties\n\n| Variable                             | Description                          |\n|--------------------------------------|--------------------------------------|\n| `--pop-up-bar-comp-height`         | Component container height           |\n| `--pop-up-bar-comp-width`          | Component container width            |\n| `--pop-up-bar-height`              | Pop-up bar height                    |\n| `--pop-up-bar-width`               | Pop-up bar width                     |\n| `--pop-up-bar-color`               | Pop-up bar background color          |\n| `--pop-up-bar-shadow`              | Pop-up bar box-shadow                |\n| `--pop-up-bar-button-height`       | Toggle button height                 |\n| `--pop-up-bar-button-width`        | Toggle button width                  |\n| `--pop-up-bar-button-color`        | Button background color              |\n| `--pop-up-bar-button-hover-color`  | Button background color on hover     |\n| `--pop-up-bar-button-shadow`       | Button box-shadow                    |\n| `--pop-up-bar-icon-height`         | Icon height                          |\n| `--pop-up-bar-icon-width`          | Icon width                           |\n| `--pop-up-bar-gap`                 | Gap between bar and button           |\n\n#### Shadow DOM Parts\n\n| Part Name        | Description                              |\n|------------------|------------------------------------------|\n| `container`     | Main wrapper container                   |\n| `button`        | The toggle button                        |\n| `icon`          | The icon image inside the button         |\n| `arrow`         | The fallback arrow icon (if no image)    |\n| `bar-container` | Container wrapping the pop-up bar        |\n| `bar`           | The pop-up bar that holds slotted content|\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the entire component container",table:{defaultValue:{summary:"fit-content"},category:"Layout"}},compWidth:{control:"text",description:"Width of the entire component container",table:{defaultValue:{summary:"fit-content"},category:"Layout"}},barHeight:{control:"text",description:"Height of the pop-up bar",table:{defaultValue:{summary:"100px"},category:"Bar"}},barWidth:{control:"text",description:"Width of the pop-up bar",table:{defaultValue:{summary:"fit-content"},category:"Bar"}},barColor:{control:"color",description:"Background color of the pop-up bar",table:{defaultValue:{summary:"#eceff1"},category:"Bar"}},barShadow:{control:"text",description:"CSS box-shadow applied to the pop-up bar",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Bar"}},butHeight:{control:"text",description:"Height of the toggle button",table:{defaultValue:{summary:"30px"},category:"Button"}},butWidth:{control:"text",description:"Width of the toggle button",table:{defaultValue:{summary:"200px"},category:"Button"}},butColor:{control:"color",description:"Background color of the toggle button",table:{defaultValue:{summary:"#eceff1"},category:"Button"}},butHoverColor:{control:"color",description:"Background color on button hover",table:{defaultValue:{summary:"#cfd8dc"},category:"Button"}},butShadow:{control:"text",description:"CSS box-shadow applied to the toggle button",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Button"}},iconHeight:{control:"text",description:"Height of the icon inside the button",table:{defaultValue:{summary:"70%"},category:"Icon"}},iconWidth:{control:"text",description:"Width of the icon inside the button",table:{defaultValue:{summary:"70%"},category:"Icon"}},iconSrc:{control:"text",description:"Source URL or path of the icon image",table:{category:"Icon"}},iconAlt:{control:"text",description:"Alternative text for the icon image",table:{category:"Icon"}},gapSize:{control:"text",description:"Gap between the toggle button and the bar",table:{defaultValue:{summary:"10px"},category:"Layout"}}}},c=t=>u`
  <pop-up-bar
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .barHeight=${t.barHeight}
    .barWidth=${t.barWidth}
    .barColor=${t.barColor}
    .barShadow=${t.barShadow}
    .butHeight=${t.butHeight}
    .butWidth=${t.butWidth}
    .butColor=${t.butColor}
    .butHoverColor=${t.butHoverColor}
    .butShadow=${t.butShadow}
    .iconHeight=${t.iconHeight}
    .iconWidth=${t.iconWidth}
    .iconSrc=${t.iconSrc}
    .iconAlt=${t.iconAlt}
    .gapSize=${t.gapSize}
  >
    <div
      style="height: 100%; display: flex; justify-content: center; align-items: center; gap: 10px"
    >
      <icon-button compHeight="80%"></icon-button>
      <icon-button compHeight="80%"></icon-button>
      <icon-button compHeight="80%"></icon-button>
    </div>
  </pop-up-bar>
`;c.args={compHeight:"fit-content",compWidth:"fit-content",barHeight:"100px",barWidth:"fit-content",barColor:"#eceff1",barShadow:"0px 2px 5px #d0d0d0",butHeight:"30px",butWidth:"200px",butColor:"#eceff1",butHoverColor:"#cfd8dc",butShadow:"0px 2px 5px #d0d0d0",iconHeight:"70%",iconWidth:"70%",iconAlt:"Arrow up",gapSize:"10px"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => html\`
  <pop-up-bar
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .barHeight=\${args.barHeight}
    .barWidth=\${args.barWidth}
    .barColor=\${args.barColor}
    .barShadow=\${args.barShadow}
    .butHeight=\${args.butHeight}
    .butWidth=\${args.butWidth}
    .butColor=\${args.butColor}
    .butHoverColor=\${args.butHoverColor}
    .butShadow=\${args.butShadow}
    .iconHeight=\${args.iconHeight}
    .iconWidth=\${args.iconWidth}
    .iconSrc=\${args.iconSrc}
    .iconAlt=\${args.iconAlt}
    .gapSize=\${args.gapSize}
  >
    <div
      style="height: 100%; display: flex; justify-content: center; align-items: center; gap: 10px"
    >
      <icon-button compHeight="80%"></icon-button>
      <icon-button compHeight="80%"></icon-button>
      <icon-button compHeight="80%"></icon-button>
    </div>
  </pop-up-bar>
\``,...c.parameters?.docs?.source}}};const H=["Default"];export{c as Default,H as __namedExportsOrder,S as default};
