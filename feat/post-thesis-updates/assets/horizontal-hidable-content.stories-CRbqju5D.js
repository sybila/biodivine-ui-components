import{i as p,a as m,x as d}from"./iframe-Bim09L3k.js";import{n as i,t as g}from"./property-DkBj7JS2.js";var b=Object.defineProperty,y=Object.getOwnPropertyDescriptor,f=(t,o,c)=>o in t?b(t,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[o]=c,e=(t,o,c,a)=>{for(var r=a>1?void 0:a?y(o,c):o,s=t.length-1,h;s>=0;s--)(h=t[s])&&(r=(a?h(o,c,r):h(r))||r);return a&&r&&b(o,c,r),r},u=(t,o,c)=>f(t,typeof o!="symbol"?o+"":o,c);let n=class extends m{updateStyleVariable(t,o,c){const a=this[t]??c;this.style.setProperty(o,a)}updated(t){const o=(c,a,r)=>t.has(c)&&this.updateStyleVariable(c,a,r);o("compHeight","--hidable-content-component-height","200px"),o("compBgColor","--hidable-content-comp-bg-color","#eceff1"),o("compBorder","--hidable-content-comp-border","none"),o("compBorderRadius","--hidable-content-comp-border-radius","5px"),o("compShadow","--hidable-content-comp-shadow","none"),o("contentWidth","--hidable-content-content-width","200px"),o("contentJustifyContent","--hidable-content-content-justify-content","start"),o("contentAlignItems","--hidable-content-content-align-items","center"),o("contentPadding","--hidable-content-content-padding","8px"),o("contentOverflowX","--hidable-content-content-overflow-x","hidden"),o("contentOverflowY","--hidable-content-content-overflow-y","hidden"),o("buttonWidth","--hidable-content-button-width","20px"),o("buttonHoverColor","--hidable-content-button-hover-bg-color","#b0bec5"),o("iconHeight","--hidable-content-button-icon-height","12px"),o("iconWidth","--hidable-content-button-icon-width","12px"),o("iconVisibilityTransform","--hidable-content-icon-visibility-transform","rotate(180deg)")}toggleVisibility=()=>{this.contentVisible=!this.contentVisible};render(){const t=this.contentVisible?"visible":"",o=this.buttonRight?"buttonRight":"";return d` ${this.contentVisible&&this.buttonRight?d` <slot id="content" name="content" part="content"></slot>`:""}
      <button
        id="visibility-button"
        part="visibility-button"
        @click=${this.toggleVisibility}
        @mouseenter=${c=>this.buttonOnMouseEnter?.(c)}
        @mouseleave=${c=>this.buttonOnMouseLeave?.(c)}
      >
        <img
          id="visibility-icon"
          part="visibility-icon"
          class="${t} ${o}"
          src="${this.iconSrc??n.arrowIcon}"
        />
      </button>
      ${this.contentVisible&&!this.buttonRight?d` <slot id="content" name="content" part="content"></slot>`:""}`}};u(n,"styles",p`
    :host {
      display: flex;
      flex-direction: row;

      height: fit-content;
      width: fit-content;
      overflow: hidden;

      background-color: var(--hidable-content-comp-bg-color, #eceff1);
      border: var(--hidable-content-comp-border, none);
      border-radius: var(--hidable-content-comp-border-radius, 5px);
      box-shadow: var(--hidable-content-comp-shadow, none);
    }

    #content {
      display: flex;
      flex-direction: row;

      height: var(--hidable-content-component-height, 200px);
      width: var(--hidable-content-content-width, 200px);

      justify-content: var(--hidable-content-content-justify-content, start);
      align-items: var(--hidable-content-content-align-items, center);

      box-sizing: border-box;

      overflow-x: var(--hidable-content-content-overflow-x, hidden);
      overflow-y: var(--hidable-content-content-overflow-y, hidden);

      padding: var(--hidable-content-content-padding, 8px);
    }

    #visibility-button {
      display: flex;

      justify-content: center;
      align-items: center;

      height: var(--hidable-content-component-height, 200px);
      width: var(--hidable-content-button-width, 20px);

      background-color: transparent;

      border: none;
      transition: background-color 0.3s;
      cursor: pointer;

      padding: 0;
      overflow: hidden;
    }

    #visibility-button:hover {
      background-color: var(--hidable-content-button-hover-bg-color, #b0bec5);
    }

    #visibility-icon {
      height: var(--hidable-content-button-icon-height, 12px);
      width: var(--hidable-content-button-icon-width, 12px);
      max-height: var(--hidable-content-button-icon-height, 12px);
      max-width: var(--hidable-content-button-icon-width, 12px);
    }

    #visibility-icon.visible,
    #visibility-icon.buttonRight {
      transform: var(
        --hidable-content-icon-visibility-transform,
        rotate(180deg)
      );
    }

    #visibility-icon.visible.buttonRight {
      transform: rotate(0deg);
    }
  `);u(n,"arrowIcon","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgZmlsbD0iIzAwMDAwMCIgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiANCgkgdmlld0JveD0iMCAwIDUxMi4wMDUgNTEyLjAwNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM4OC40MTgsMjQwLjkyM0wxNTMuNzUxLDYuMjU2Yy04LjM0MS04LjM0MS0yMS44MjQtOC4zNDEtMzAuMTY1LDBzLTguMzQxLDIxLjgyNCwwLDMwLjE2NUwzNDMuMTcsMjU2LjAwNQ0KCQkJTDEyMy41ODYsNDc1LjU4OWMtOC4zNDEsOC4zNDEtOC4zNDEsMjEuODI0LDAsMzAuMTY1YzQuMTYsNC4xNiw5LjYyMSw2LjI1MSwxNS4wODMsNi4yNTFjNS40NjEsMCwxMC45MjMtMi4wOTEsMTUuMDgzLTYuMjUxDQoJCQlsMjM0LjY2Ny0yMzQuNjY3QzM5Ni43NTksMjYyLjc0NywzOTYuNzU5LDI0OS4yNjQsMzg4LjQxOCwyNDAuOTIzeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg==");e([i({type:String})],n.prototype,"compHeight",2);e([i({type:String})],n.prototype,"compBgColor",2);e([i({type:String})],n.prototype,"compBorder",2);e([i({type:String})],n.prototype,"compBorderRadius",2);e([i({type:String})],n.prototype,"compShadow",2);e([i({type:String})],n.prototype,"contentWidth",2);e([i({type:String})],n.prototype,"contentJustifyContent",2);e([i({type:String})],n.prototype,"contentAlignItems",2);e([i({type:String})],n.prototype,"contentPadding",2);e([i({type:String})],n.prototype,"contentOverflowX",2);e([i({type:String})],n.prototype,"contentOverflowY",2);e([i({type:String})],n.prototype,"buttonWidth",2);e([i({type:String})],n.prototype,"buttonHoverColor",2);e([i({type:Function})],n.prototype,"buttonOnMouseEnter",2);e([i({type:Function})],n.prototype,"buttonOnMouseLeave",2);e([i({type:String})],n.prototype,"iconHeight",2);e([i({type:String})],n.prototype,"iconWidth",2);e([i({type:String})],n.prototype,"iconSrc",2);e([i({type:String})],n.prototype,"iconAlt",2);e([i({type:String})],n.prototype,"iconVisibilityTransform",2);e([i({type:Boolean})],n.prototype,"buttonRight",2);e([i({type:Boolean})],n.prototype,"contentVisible",2);n=e([g("horizontal-hidable-content")],n);const x={title:"Components/Content Panels/Horizontal Hidable Content",tags:["autodocs"],parameters:{docs:{description:{component:`
### <horizontal-hidable-content>

Container component with a button to toggle horizontal content visibility.

#### CSS Custom Properties

| Variable | Description |
|-------------------------------|-------------------------------|
| --hidable-content-component-height | Height of the component |
| --hidable-content-comp-bg-color | Background color of the component |
| --hidable-content-comp-border | Border of the component |
| --hidable-content-comp-border-radius | Border radius of the component |
| --hidable-content-comp-shadow | Box shadow of the component |
| --hidable-content-content-width | Width of the content area |
| --hidable-content-content-justify-content | Justify content in content area |
| --hidable-content-content-align-items | Align items in content area |
| --hidable-content-content-padding | Padding in content area |
| --hidable-content-content-overflow-x | Horizontal overflow of content |
| --hidable-content-content-overflow-y | Vertical overflow of content |
| --hidable-content-button-width | Width of the visibility button |
| --hidable-content-button-hover-bg-color | Hover background color of button |
| --hidable-content-button-icon-height | Height of the button icon |
| --hidable-content-button-icon-width | Width of the button icon |
| --hidable-content-icon-visibility-transform | Transform for icon when visible |

#### Shadow DOM Parts

| Part Name | Description |
|---------------------|-------------------------------|
| content | The slot for the main content |
| visibility-button | The button to toggle visibility |
| visibility-icon | The icon in the button |
`}}},argTypes:{compHeight:{control:"text",description:"Height of the component",table:{defaultValue:{summary:"200px"},category:"Component"}},compBgColor:{control:"color",description:"Background color of the component",table:{defaultValue:{summary:"#eceff1"},category:"Component"}},compBorder:{control:"text",description:"Border of the component",table:{defaultValue:{summary:"none"},category:"Component"}},compBorderRadius:{control:"text",description:"Border radius of the component",table:{defaultValue:{summary:"5px"},category:"Component"}},compShadow:{control:"text",description:"Box shadow of the component",table:{defaultValue:{summary:"none"},category:"Component"}},contentWidth:{control:"text",description:"Width of the content area",table:{defaultValue:{summary:"200px"},category:"Content"}},contentJustifyContent:{control:"text",description:"Justify content in content area",table:{defaultValue:{summary:"start"},category:"Content"}},contentAlignItems:{control:"text",description:"Align items in content area",table:{defaultValue:{summary:"center"},category:"Content"}},contentPadding:{control:"text",description:"Padding in content area",table:{defaultValue:{summary:"8px"},category:"Content"}},contentOverflowX:{control:"text",description:"Horizontal overflow of content",table:{defaultValue:{summary:"hidden"},category:"Content"}},contentOverflowY:{control:"text",description:"Vertical overflow of content",table:{defaultValue:{summary:"hidden"},category:"Content"}},buttonWidth:{control:"text",description:"Width of the visibility button",table:{defaultValue:{summary:"20px"},category:"Button"}},buttonHoverColor:{control:"color",description:"Hover background color of button",table:{defaultValue:{summary:"#b0bec5"},category:"Button"}},buttonOnMouseEnter:{action:"mouseenter",description:"Function to handle mouse enter event on the button. Function receives the mouse event as an argument. (e: MouseEvent) => void",table:{category:"Button Events"}},buttonOnMouseLeave:{action:"mouseleave",description:"Function to handle mouse leave event on the button. Function receives the mouse event as an argument. (e: MouseEvent) => void",table:{category:"Button Events"}},iconHeight:{control:"text",description:"Height of the button icon",table:{defaultValue:{summary:"12px"},category:"Icon"}},iconWidth:{control:"text",description:"Width of the button icon",table:{defaultValue:{summary:"12px"},category:"Icon"}},iconSrc:{control:"text",description:"Source for the button icon",table:{defaultValue:{summary:"default arrow"},category:"Icon"}},iconAlt:{control:"text",description:"Alt text for the button icon",table:{defaultValue:{summary:""},category:"Icon"}},iconVisibilityTransform:{control:"text",description:"Transform for icon when visible",table:{defaultValue:{summary:"rotate(180deg)"},category:"Icon"}},buttonRight:{control:"boolean",description:"If is true then the button is moved to the right edge of the component and the icon is transformed the same way as if contentVisible is true.",table:{defaultValue:{summary:"false"},category:"State"}},contentVisible:{control:"boolean",description:"If true, content is visible",table:{defaultValue:{summary:"false"},category:"State"}}}},l=t=>d`
  <horizontal-hidable-content
    .compHeight=${t.compHeight}
    .compBgColor=${t.compBgColor}
    .compBorder=${t.compBorder}
    .compBorderRadius=${t.compBorderRadius}
    .compShadow=${t.compShadow}
    .contentWidth=${t.contentWidth}
    .contentJustifyContent=${t.contentJustifyContent}
    .contentAlignItems=${t.contentAlignItems}
    .contentPadding=${t.contentPadding}
    .contentOverflowX=${t.contentOverflowX}
    .contentOverflowY=${t.contentOverflowY}
    .buttonWidth=${t.buttonWidth}
    .buttonHoverColor=${t.buttonHoverColor}
    .buttonOnMouseEnter=${t.buttonOnMouseEnter}
    .buttonOnMouseLeave=${t.buttonOnMouseLeave}
    .iconHeight=${t.iconHeight}
    .iconWidth=${t.iconWidth}
    .iconSrc=${t.iconSrc}
    .iconAlt=${t.iconAlt}
    .iconVisibilityTransform=${t.iconVisibilityTransform}
    .buttonRight=${t.buttonRight}
    .contentVisible=${t.contentVisible}
  >
    <div slot="content">This is the horizontally hidable content area.</div>
  </horizontal-hidable-content>
`;l.args={compHeight:"200px",compBgColor:"#eceff1",compBorder:"none",compBorderRadius:"5px",compShadow:"none",contentWidth:"200px",contentJustifyContent:"start",contentAlignItems:"center",contentPadding:"8px",contentOverflowX:"hidden",contentOverflowY:"hidden",buttonWidth:"20px",buttonHoverColor:"#b0bec5",buttonOnMouseEnter:t=>console.log("Button mouse enter",t),buttonOnMouseLeave:t=>console.log("Button mouse leave",t),iconHeight:"12px",iconWidth:"12px",iconSrc:void 0,iconAlt:void 0,iconVisibilityTransform:"rotate(180deg)",buttonRight:!1,contentVisible:!1};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => html\`
  <horizontal-hidable-content
    .compHeight=\${args.compHeight}
    .compBgColor=\${args.compBgColor}
    .compBorder=\${args.compBorder}
    .compBorderRadius=\${args.compBorderRadius}
    .compShadow=\${args.compShadow}
    .contentWidth=\${args.contentWidth}
    .contentJustifyContent=\${args.contentJustifyContent}
    .contentAlignItems=\${args.contentAlignItems}
    .contentPadding=\${args.contentPadding}
    .contentOverflowX=\${args.contentOverflowX}
    .contentOverflowY=\${args.contentOverflowY}
    .buttonWidth=\${args.buttonWidth}
    .buttonHoverColor=\${args.buttonHoverColor}
    .buttonOnMouseEnter=\${args.buttonOnMouseEnter}
    .buttonOnMouseLeave=\${args.buttonOnMouseLeave}
    .iconHeight=\${args.iconHeight}
    .iconWidth=\${args.iconWidth}
    .iconSrc=\${args.iconSrc}
    .iconAlt=\${args.iconAlt}
    .iconVisibilityTransform=\${args.iconVisibilityTransform}
    .buttonRight=\${args.buttonRight}
    .contentVisible=\${args.contentVisible}
  >
    <div slot="content">This is the horizontally hidable content area.</div>
  </horizontal-hidable-content>
\``,...l.parameters?.docs?.source}}};const M=["Default"];export{l as Default,M as __namedExportsOrder,x as default};
