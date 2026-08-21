import{i as p,a as g,x as d}from"./iframe-4f8jCZ-N.js";import{n as i,t as m}from"./property-BTWXHwnk.js";var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,v=(t,o,c)=>o in t?u(t,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[o]=c,n=(t,o,c,a)=>{for(var r=a>1?void 0:a?y(o,c):o,s=t.length-1,b;s>=0;s--)(b=t[s])&&(r=(a?b(o,c,r):b(r))||r);return a&&r&&u(o,c,r),r},h=(t,o,c)=>v(t,typeof o!="symbol"?o+"":o,c);let e=class extends g{updateStyleVariable(t,o,c){const a=this[t]??c;this.style.setProperty(o,a)}updated(t){const o=(c,a,r)=>t.has(c)&&this.updateStyleVariable(c,a,r);o("compWidth","--hidable-content-component-width","200px"),o("compBgColor","--hidable-content-comp-bg-color","#eceff1"),o("compBorder","--hidable-content-comp-border","none"),o("compBorderRadius","--hidable-content-comp-border-radius","5px"),o("compShadow","--hidable-content-comp-shadow","none"),o("contentHeight","--hidable-content-content-height","200px"),o("contentJustifyContent","--hidable-content-content-justify-content","start"),o("contentAlignItems","--hidable-content-content-align-items","center"),o("contentPadding","--hidable-content-content-padding","8px"),o("contentOverflowX","--hidable-content-content-overflow-x","hidden"),o("contentOverflowY","--hidable-content-content-overflow-y","hidden"),o("buttonHeight","--hidable-content-button-height","20px"),o("buttonHoverColor","--hidable-content-button-hover-bg-color","#b0bec5"),o("iconHeight","--hidable-content-button-icon-height","12px"),o("iconWidth","--hidable-content-button-icon-width","12px"),o("iconVisibilityTransform","--hidable-content-icon-visibility-transform","rotate(180deg)")}toggleVisibility=()=>{this.contentVisible=!this.contentVisible};render(){const t=this.contentVisible?"visible":"",o=this.buttonDown?"buttonDown":"";return d` ${this.contentVisible&&this.buttonDown?d` <slot id="content" name="content" part="content"></slot>`:""}
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
          src="${this.iconSrc??e.arrowIcon}"
        />
      </button>
      ${this.contentVisible&&!this.buttonDown?d` <slot id="content" name="content" part="content"></slot>`:""}`}};h(e,"styles",p`
    :host {
      display: flex;
      flex-direction: column;

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
      flex-direction: column;

      height: var(--hidable-content-content-height, 200px);
      width: var(--hidable-content-component-width, 200px);

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

      height: var(--hidable-content-button-height, 20px);
      width: var(--hidable-content-component-width, 200px);

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
    #visibility-icon.buttonDown {
      transform: var(
        --hidable-content-icon-visibility-transform,
        rotate(180deg)
      );
    }

    #visibility-icon.visible.buttonDown {
      transform: rotate(0deg);
    }
  `);h(e,"arrowIcon","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgLTQuNSAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+YXJyb3dfZG93biBbIzMzOF08L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPg0KDQo8L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJEcmliYmJsZS1MaWdodC1QcmV2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIwLjAwMDAwMCwgLTY2ODQuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+DQogICAgICAgICAgICA8ZyBpZD0iaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2LjAwMDAwMCwgMTYwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjQuMjkyMzA4LDY1MjQuMzY1ODMgTDE2NC4yOTIzMDgsNjUyNC4zNjU4MyBDMTYzLjkwMjU2NCw2NTI0Ljc3MDcxIDE2My45MDI1NjQsNjUyNS40MjYxOSAxNjQuMjkyMzA4LDY1MjUuODMwMDQgTDE3Mi41NTU4NzMsNjUzNC4zOTI2NyBDMTczLjMzNjM2LDY1MzUuMjAyNDQgMTc0LjYwMjUyOCw2NTM1LjIwMjQ0IDE3NS4zODMwMTQsNjUzNC4zOTI2NyBMMTgzLjcwNzU0LDY1MjUuNzY3OTEgQzE4NC4wOTMyODYsNjUyNS4zNjcxNiAxODQuMDk4MjgzLDY1MjQuNzE5OTcgMTgzLjcxNzUzMyw2NTI0LjMxNDA1IEMxODMuMzI4Nzg5LDY1MjMuODk5ODUgMTgyLjY4ODIxLDY1MjMuODk0NjcgMTgyLjI5MzQ3LDY1MjQuMzAyNjYgTDE3NC42NzY0NzksNjUzMi4xOTYzNiBDMTc0LjI4NTczNiw2NTMyLjYwMTI0IDE3My42NTMxNTIsNjUzMi42MDEyNCAxNzMuMjYyNDA5LDY1MzIuMTk2MzYgTDE2NS43MDUzNzksNjUyNC4zNjU4MyBDMTY1LjMxNTYzNSw2NTIzLjk2MDk0IDE2NC42ODMwNTEsNjUyMy45NjA5NCAxNjQuMjkyMzA4LDY1MjQuMzY1ODMiIGlkPSJhcnJvd19kb3duLVsjMzM4XSI+DQoNCjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==");n([i({type:String})],e.prototype,"compWidth",2);n([i({type:String})],e.prototype,"compBgColor",2);n([i({type:String})],e.prototype,"compBorder",2);n([i({type:String})],e.prototype,"compBorderRadius",2);n([i({type:String})],e.prototype,"compShadow",2);n([i({type:String})],e.prototype,"contentHeight",2);n([i({type:String})],e.prototype,"contentJustifyContent",2);n([i({type:String})],e.prototype,"contentAlignItems",2);n([i({type:String})],e.prototype,"contentPadding",2);n([i({type:String})],e.prototype,"contentOverflowX",2);n([i({type:String})],e.prototype,"contentOverflowY",2);n([i({type:String})],e.prototype,"buttonHeight",2);n([i({type:String})],e.prototype,"buttonHoverColor",2);n([i({type:Function})],e.prototype,"buttonOnMouseEnter",2);n([i({type:Function})],e.prototype,"buttonOnMouseLeave",2);n([i({type:String})],e.prototype,"iconHeight",2);n([i({type:String})],e.prototype,"iconWidth",2);n([i({type:String})],e.prototype,"iconSrc",2);n([i({type:String})],e.prototype,"iconAlt",2);n([i({type:String})],e.prototype,"iconVisibilityTransform",2);n([i({type:Boolean})],e.prototype,"buttonDown",2);n([i({type:Boolean})],e.prototype,"contentVisible",2);e=n([m("vertical-hidable-content")],e);const M={title:"Components/Content Panels/Vertical Hidable Content",tags:["autodocs"],parameters:{docs:{description:{component:`
### <vertical-hidable-content>

Container component with a button to toggle vertical content visibility.

#### CSS Custom Properties

| Variable | Description |
|-------------------------------|-------------------------------|
| --hidable-content-component-width | Width of the component |
| --hidable-content-comp-bg-color | Background color of the component |
| --hidable-content-comp-border | Border of the component |
| --hidable-content-comp-border-radius | Border radius of the component |
| --hidable-content-comp-shadow | Box shadow of the component |
| --hidable-content-content-height | Height of the content area |
| --hidable-content-content-justify-content | Justify content in content area |
| --hidable-content-content-align-items | Align items in content area |
| --hidable-content-content-padding | Padding in content area |
| --hidable-content-content-overflow-x | Horizontal overflow of content |
| --hidable-content-content-overflow-y | Vertical overflow of content |
| --hidable-content-button-height | Height of the visibility button |
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
        `}}},argTypes:{compWidth:{control:"text",description:"Width of the component",table:{defaultValue:{summary:"200px"},category:"Component"}},compBgColor:{control:"color",description:"Background color of the component",table:{defaultValue:{summary:"#eceff1"},category:"Component"}},compBorder:{control:"text",description:"Border of the component",table:{defaultValue:{summary:"none"},category:"Component"}},compBorderRadius:{control:"text",description:"Border radius of the component",table:{defaultValue:{summary:"5px"},category:"Component"}},compShadow:{control:"text",description:"Box shadow of the component",table:{defaultValue:{summary:"none"},category:"Component"}},contentHeight:{control:"text",description:"Height of the content area",table:{defaultValue:{summary:"200px"},category:"Content"}},contentJustifyContent:{control:"text",description:"Justify content in content area",table:{defaultValue:{summary:"start"},category:"Content"}},contentAlignItems:{control:"text",description:"Align items in content area",table:{defaultValue:{summary:"center"},category:"Content"}},contentPadding:{control:"text",description:"Padding in content area",table:{defaultValue:{summary:"8px"},category:"Content"}},contentOverflowX:{control:"text",description:"Horizontal overflow of content",table:{defaultValue:{summary:"hidden"},category:"Content"}},contentOverflowY:{control:"text",description:"Vertical overflow of content",table:{defaultValue:{summary:"hidden"},category:"Content"}},buttonHeight:{control:"text",description:"Height of the visibility button",table:{defaultValue:{summary:"20px"},category:"Button"}},buttonHoverColor:{control:"color",description:"Hover background color of button",table:{defaultValue:{summary:"#b0bec5"},category:"Button"}},buttonOnMouseEnter:{action:"mouseenter",description:"Function to handle mouse enter event on the button. Function receives the mouse event as an argument. (e: MouseEvent) => void",table:{category:"Button Events"}},buttonOnMouseLeave:{action:"mouseleave",description:"Function to handle mouse leave event on the button. Function receives the mouse event as an argument. (e: MouseEvent) => void",table:{category:"Button Events"}},iconHeight:{control:"text",description:"Height of the button icon",table:{defaultValue:{summary:"12px"},category:"Icon"}},iconWidth:{control:"text",description:"Width of the button icon",table:{defaultValue:{summary:"12px"},category:"Icon"}},iconSrc:{control:"text",description:"Source for the button icon",table:{defaultValue:{summary:"default arrow"},category:"Icon"}},iconAlt:{control:"text",description:"Alt text for the button icon",table:{defaultValue:{summary:""},category:"Icon"}},iconVisibilityTransform:{control:"text",description:"Transform for icon when visible",table:{defaultValue:{summary:"rotate(180deg)"},category:"Icon"}},buttonDown:{control:"boolean",description:"If true, button is in down state. If is true then the button is moved to the bottom edge of the component and the icon is transformed the same way as if contentVisible is true.",table:{defaultValue:{summary:"false"},category:"State"}},contentVisible:{control:"boolean",description:"If true, content is visible",table:{defaultValue:{summary:"false"},category:"State"}}}},l=t=>d`
  <vertical-hidable-content
    .compWidth=${t.compWidth}
    .compBgColor=${t.compBgColor}
    .compBorder=${t.compBorder}
    .compBorderRadius=${t.compBorderRadius}
    .compShadow=${t.compShadow}
    .contentHeight=${t.contentHeight}
    .contentJustifyContent=${t.contentJustifyContent}
    .contentAlignItems=${t.contentAlignItems}
    .contentPadding=${t.contentPadding}
    .contentOverflowX=${t.contentOverflowX}
    .contentOverflowY=${t.contentOverflowY}
    .buttonHeight=${t.buttonHeight}
    .buttonHoverColor=${t.buttonHoverColor}
    .buttonOnMouseEnter=${t.buttonOnMouseEnter}
    .buttonOnMouseLeave=${t.buttonOnMouseLeave}
    .iconHeight=${t.iconHeight}
    .iconWidth=${t.iconWidth}
    .iconSrc=${t.iconSrc}
    .iconAlt=${t.iconAlt}
    .iconVisibilityTransform=${t.iconVisibilityTransform}
    .buttonDown=${t.buttonDown}
    .contentVisible=${t.contentVisible}
  >
    <div slot="content">This is the vertically hidable content area.</div>
  </vertical-hidable-content>
`;l.args={compWidth:"200px",compBgColor:"#eceff1",compBorder:"none",compBorderRadius:"5px",compShadow:"none",contentHeight:"200px",contentJustifyContent:"start",contentAlignItems:"center",contentPadding:"8px",contentOverflowX:"hidden",contentOverflowY:"hidden",buttonHeight:"20px",buttonHoverColor:"#b0bec5",buttonOnMouseEnter:t=>console.log("Button mouse enter",t),buttonOnMouseLeave:t=>console.log("Button mouse leave",t),iconHeight:"12px",iconWidth:"12px",iconSrc:void 0,iconAlt:void 0,iconVisibilityTransform:"rotate(180deg)",buttonDown:!1,contentVisible:!1};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => html\`
  <vertical-hidable-content
    .compWidth=\${args.compWidth}
    .compBgColor=\${args.compBgColor}
    .compBorder=\${args.compBorder}
    .compBorderRadius=\${args.compBorderRadius}
    .compShadow=\${args.compShadow}
    .contentHeight=\${args.contentHeight}
    .contentJustifyContent=\${args.contentJustifyContent}
    .contentAlignItems=\${args.contentAlignItems}
    .contentPadding=\${args.contentPadding}
    .contentOverflowX=\${args.contentOverflowX}
    .contentOverflowY=\${args.contentOverflowY}
    .buttonHeight=\${args.buttonHeight}
    .buttonHoverColor=\${args.buttonHoverColor}
    .buttonOnMouseEnter=\${args.buttonOnMouseEnter}
    .buttonOnMouseLeave=\${args.buttonOnMouseLeave}
    .iconHeight=\${args.iconHeight}
    .iconWidth=\${args.iconWidth}
    .iconSrc=\${args.iconSrc}
    .iconAlt=\${args.iconAlt}
    .iconVisibilityTransform=\${args.iconVisibilityTransform}
    .buttonDown=\${args.buttonDown}
    .contentVisible=\${args.contentVisible}
  >
    <div slot="content">This is the vertically hidable content area.</div>
  </vertical-hidable-content>
\``,...l.parameters?.docs?.source}}};const I=["Default"];export{l as Default,I as __namedExportsOrder,M as default};
