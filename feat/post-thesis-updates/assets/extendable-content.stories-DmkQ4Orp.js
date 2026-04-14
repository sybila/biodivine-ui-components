import{i as u,a as g,x as p}from"./iframe-Li3IJfo0.js";import{n as d,t as s}from"./property-DKR0QGVe.js";var h=Object.defineProperty,C=Object.getOwnPropertyDescriptor,f=(t,e,r)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e,r,a)=>{for(var i=a>1?void 0:a?C(e,r):e,l=t.length-1,x;l>=0;l--)(x=t[l])&&(i=(a?x(e,r,i):x(i))||i);return a&&i&&h(e,r,i),i},b=(t,e,r)=>f(t,typeof e!="symbol"?e+"":e,r);let n=class extends g{updateStyleVariable(t,e,r){const a=this[t]??r;this.style.setProperty(e,a)}updated(t){const e=(r,a,i)=>t.has(r)&&this.updateStyleVariable(r,a,i);e("contWidth","--extendable-content-cont-width","500px"),e("contBorder","--extendable-content-cont-border","2px #fafafa solid"),e("contBorderRadius","--extendable-content-cont-border-radius","8px"),e("contColor","--extendable-content-cont-bg-color","#f5f5f5"),e("contShadow","--extendable-content-cont-shadow","0px 2px 5px #d0d0d0"),e("contPadding","--extendable-content-cont-padding","5px"),e("contHoverBorder","--extendable-content-cont-hover-border","2px #6a7ea5 dashed"),e("contHoverColor","--extendable-content-hover-bg-color","#f5f5f5"),e("contActiveBorder","--extendable-content-active-border","2px #6a7ea5 solid"),e("contActiveColor","--extendable-content-active-bg-color","#add8e6"),e("topBottomGap","--extendable-content-top-bottom-gap","5px"),e("topHeight","--extendable-content-top-height","25px"),e("topWidth","--extendable-content-top-width","100%"),e("topContentMinHeight","--extendable-content-top-content-min-height","100%"),e("topContentMinWidth","--extendable-content-top-content-min-width","calc(100% - 30px)"),e("topContentMaxHeight","--extendable-content-top-content-max-height","100%"),e("topContentMaxWidth","--extendable-content-top-content-max-width","calc(100% - 30px)"),e("topContentJustifyC","--extendable-content-top-content-justify-content","space-between"),e("topContentAlignI","--extendable-content-top-content-align-items","center"),e("topContentOverflowX","--extendable-content-top-content-overflow-x","hidden"),e("topContentOverflowY","--extendable-content-top-content-overflow-y","hidden"),e("extendContentMinHeight","--extendable-content-extended-content-min-height","0px"),e("extendContentMinWidth","--extendable-content-extended-content-min-width","100%"),e("extendContentMaxHeight","--extendable-content-extended-content-max-height","fit-content"),e("extendContentMaxWidth","--extendable-content-extended-content-max-width","100%"),e("extendContentJustifyC","--extendable-content-extended-content-justify-content","start"),e("extendContentAlignI","--extendable-content-extended-content-align-items","center"),e("extendContentOverflowX","--extendable-content-extended-content-overflow-x","hidden"),e("extendContentOverflowY","--extendable-content-extended-content-overflow-y","hidden"),e("buttonHeight","--extendable-content-button-height","24px"),e("buttonWidth","--extendable-content-button-width","24px"),e("buttonBorderRadius","--extendable-content-button-border-radius","24px"),e("buttonColor","--extendable-content-button-bg-color","#eceff1"),e("buttonHoverColor","--extendable-content-button-hover-bg-color","#b0bec5"),e("buttonIconHeight","--extendable-content-button-icon-height","12px"),e("buttonIconWidth","--extendable-content-button-icon-width","12px")}toggleExtend=()=>{this.extended=!this.extended};render(){const t=this.extended?"extended":"",e=this.active?"active":"",r=this.hover?"hover":"";return p`<div
      id="container"
      part="container"
      class="${e} ${r}"
      @mouseenter=${this.handleMouseEnter}
      @mouseleave=${this.handleMouseLeave}
    >
      <div id="top-container" part="top-container">
        <button
          id="extend-button"
          part="extend-button"
          @click=${this.toggleExtend}
        >
          <img
            id="extend-icon"
            class=${t}
            src="${this.buttonIconSrc??n.arrowIcon}"
          />
        </button>

        <slot id="top-content" name="top-content" part="top-content"></slot>
      </div>

      ${this.extended?p` <slot
            id="extended-content"
            name="extended-content"
            part="extended-content"
          ></slot>`:""}
    </div> `}};b(n,"styles",u`
    :host {
      display: inline-block;
      height: fit-content;
      width: var(--extendable-content-cont-width, 500px);
    }

    #container {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      height: fit-content;
      width: var(--extendable-content-cont-width, 500px);

      overflow-x: hidden;
      overflow-y: hidden;

      border: var(--extendable-content-cont-border, 2px #fafafa solid);
      border-radius: var(--extendable-content-cont-border-radius, 8px);
      background-color: var(--extendable-content-cont-bg-color, #f5f5f5);
      box-shadow: var(--extendable-content-cont-shadow, 0px 2px 5px #d0d0d0);

      box-sizing: border-box;
      padding: var(--extendable-content-cont-padding, 5px);
      gap: var(--extendable-content-top-bottom-gap, 5px);
    }

    #container:hover,
    #container.hover {
      border: var(--extendable-content-cont-hover-border, 2px #6a7ea5 dashed);
      background-color: var(--extendable-content-hover-bg-color, #f5f5f5);
    }

    #container.active {
      border: var(--extendable-content-active-border, 2px #6a7ea5 solid);
      background-color: var(--extendable-content-active-bg-color, #add8e6);
    }

    #top-container {
      display: flex;

      justify-content: space-between;
      align-items: center;

      height: var(--extendable-content-top-height, 25px);
      width: var(--extendable-content-top-width, 100%);

      overflow-x: hidden;
      overflow-y: hidden;
    }

    #top-content {
      display: flex;

      justify-content: var(
        --extendable-content-top-content-justify-content,
        space-between
      );
      align-items: var(--extendable-content-top-content-align-items, center);

      min-height: var(--extendable-content-top-content-min-height, 100%);
      min-width: var(
        --extendable-content-top-content-min-width,
        calc(100% - 30px)
      );
      max-height: var(--extendable-content-top-content-max-height, 100%);
      max-width: var(
        --extendable-content-top-content-max-width,
        calc(100% - 30px)
      );

      overflow-x: var(--extendable-content-top-content-overflow-x, hidden);
      overflow-y: var(--extendable-content-top-content-overflow-y, hidden);
    }

    #extended-content {
      display: flex;
      flex-direction: column;

      justify-content: var(
        --extendable-content-extended-content-justify-content,
        start
      );
      align-items: var(
        --extendable-content-extended-content-align-items,
        center
      );

      min-height: var(
        --extendable-content-extended-content-min-height,
        fit-content
      );
      min-width: var(--extendable-content-extended-content-min-width, 100%);
      max-height: var(
        --extendable-content-extended-content-max-height,
        fit-content
      );
      max-width: var(--extendable-content-extended-content-max-width, 100%);

      overflow-x: var(--extendable-content-extended-content-overflow-x, hidden);
      overflow-y: var(--extendable-content-extended-content-overflow-y, hidden);
    }

    #extend-button {
      display: flex;

      justify-content: center;
      align-items: center;

      height: var(--extendable-content-button-height, 24px);
      width: var(--extendable-content-button-width, 24px);

      border-radius: var(--extendable-content-button-border-radius, 24px);
      background-color: var(--extendable-content-button-bg-color, #eceff1);

      border: none;
      transition: background-color 0.3s;
      cursor: pointer;

      padding: 0;
      overflow: hidden;
    }

    #extend-button:hover {
      background-color: var(
        --extendable-content-button-hover-bg-color,
        #b0bec5
      );
    }

    #extend-icon {
      height: var(--extendable-content-button-icon-height, 12px);
      width: var(--extendable-content-button-icon-width, 12px);
      max-height: var(--extendable-content-button-icon-height, 12px);
      max-width: var(--extendable-content-button-icon-width, 12px);
    }

    #extend-icon.extended {
      transform: rotate(180deg);
    }
  `);b(n,"arrowIcon","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgLTQuNSAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+YXJyb3dfZG93biBbIzMzOF08L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPg0KDQo8L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJEcmliYmJsZS1MaWdodC1QcmV2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIwLjAwMDAwMCwgLTY2ODQuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+DQogICAgICAgICAgICA8ZyBpZD0iaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2LjAwMDAwMCwgMTYwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjQuMjkyMzA4LDY1MjQuMzY1ODMgTDE2NC4yOTIzMDgsNjUyNC4zNjU4MyBDMTYzLjkwMjU2NCw2NTI0Ljc3MDcxIDE2My45MDI1NjQsNjUyNS40MjYxOSAxNjQuMjkyMzA4LDY1MjUuODMwMDQgTDE3Mi41NTU4NzMsNjUzNC4zOTI2NyBDMTczLjMzNjM2LDY1MzUuMjAyNDQgMTc0LjYwMjUyOCw2NTM1LjIwMjQ0IDE3NS4zODMwMTQsNjUzNC4zOTI2NyBMMTgzLjcwNzU0LDY1MjUuNzY3OTEgQzE4NC4wOTMyODYsNjUyNS4zNjcxNiAxODQuMDk4MjgzLDY1MjQuNzE5OTcgMTgzLjcxNzUzMyw2NTI0LjMxNDA1IEMxODMuMzI4Nzg5LDY1MjMuODk5ODUgMTgyLjY4ODIxLDY1MjMuODk0NjcgMTgyLjI5MzQ3LDY1MjQuMzAyNjYgTDE3NC42NzY0NzksNjUzMi4xOTYzNiBDMTc0LjI4NTczNiw2NTMyLjYwMTI0IDE3My42NTMxNTIsNjUzMi42MDEyNCAxNzMuMjYyNDA5LDY1MzIuMTk2MzYgTDE2NS43MDUzNzksNjUyNC4zNjU4MyBDMTY1LjMxNTYzNSw2NTIzLjk2MDk0IDE2NC42ODMwNTEsNjUyMy45NjA5NCAxNjQuMjkyMzA4LDY1MjQuMzY1ODMiIGlkPSJhcnJvd19kb3duLVsjMzM4XSI+DQoNCjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==");o([d({type:String})],n.prototype,"contWidth",2);o([d({type:String})],n.prototype,"contBorder",2);o([d({type:String})],n.prototype,"contBorderRadius",2);o([d({type:String})],n.prototype,"contColor",2);o([d({type:String})],n.prototype,"contShadow",2);o([d({type:String})],n.prototype,"contPadding",2);o([d({type:String})],n.prototype,"contHoverBorder",2);o([d({type:String})],n.prototype,"contHoverColor",2);o([d({type:String})],n.prototype,"contActiveBorder",2);o([d({type:String})],n.prototype,"contActiveColor",2);o([d({type:String})],n.prototype,"topBottomGap",2);o([d({type:String})],n.prototype,"topHeight",2);o([d({type:String})],n.prototype,"topWidth",2);o([d({type:String})],n.prototype,"topContentMinHeight",2);o([d({type:String})],n.prototype,"topContentMinWidth",2);o([d({type:String})],n.prototype,"topContentMaxHeight",2);o([d({type:String})],n.prototype,"topContentMaxWidth",2);o([d({type:String})],n.prototype,"topContentJustifyC",2);o([d({type:String})],n.prototype,"topContentAlignI",2);o([d({type:String})],n.prototype,"topContentOverflowX",2);o([d({type:String})],n.prototype,"topContentOverflowY",2);o([d({type:String})],n.prototype,"extendContentMinHeight",2);o([d({type:String})],n.prototype,"extendContentMinWidth",2);o([d({type:String})],n.prototype,"extendContentMaxHeight",2);o([d({type:String})],n.prototype,"extendContentMaxWidth",2);o([d({type:String})],n.prototype,"extendContentJustifyC",2);o([d({type:String})],n.prototype,"extendContentAlignI",2);o([d({type:String})],n.prototype,"extendContentOverflowX",2);o([d({type:String})],n.prototype,"extendContentOverflowY",2);o([d({type:String})],n.prototype,"buttonHeight",2);o([d({type:String})],n.prototype,"buttonWidth",2);o([d({type:String})],n.prototype,"buttonBorderRadius",2);o([d({type:String})],n.prototype,"buttonColor",2);o([d({type:String})],n.prototype,"buttonHoverColor",2);o([d({type:String})],n.prototype,"buttonIconSrc",2);o([d({type:String})],n.prototype,"buttonIconHeight",2);o([d({type:String})],n.prototype,"buttonIconWidth",2);o([d({type:Boolean})],n.prototype,"extended",2);o([d({type:Boolean})],n.prototype,"active",2);o([d({type:Boolean})],n.prototype,"hover",2);o([d({type:Function})],n.prototype,"handleMouseEnter",2);o([d({type:Function})],n.prototype,"handleMouseLeave",2);n=o([s("extendable-content")],n);const m={title:"Components/Content Panels/Extendable Content",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<extendable-content>`\n\nContainer component that can toggle between collapsed and extended states.\n\n#### CSS Custom Properties\n\n| Variable                                 | Description                                   |\n|------------------------------------------|-----------------------------------------------|\n| `--extendable-content-cont-width`       | Width of the host and container               |\n| `--extendable-content-cont-border`      | Border of the container                       |\n| `--extendable-content-cont-border-radius` | Border radius of the container              |\n| `--extendable-content-cont-bg-color`    | Background color of the container             |\n| `--extendable-content-cont-shadow`      | Box shadow of the container                   |\n| `--extendable-content-cont-padding`     | Padding inside the container                  |\n| `--extendable-content-cont-hover-border`| Border while hovered                          |\n| `--extendable-content-hover-bg-color`   | Background color while hovered                |\n| `--extendable-content-active-border`    | Border while active                           |\n| `--extendable-content-active-bg-color`  | Background color while active                 |\n| `--extendable-content-top-bottom-gap`   | Gap between top container and extended content         |\n| `--extendable-content-top-height`       | Height of top container                       |\n| `--extendable-content-top-width`        | Width of top container                        |\n| `--extendable-content-top-content-min-height` | Min height of top-content slot         |\n| `--extendable-content-top-content-min-width` | Min width of top-content slot           |\n| `--extendable-content-top-content-max-height` | Max height of top-content slot         |\n| `--extendable-content-top-content-max-width` | Max width of top-content slot           |\n| `--extendable-content-top-content-justify-content` | Justify content for top-content slot |\n| `--extendable-content-top-content-align-items` | Align items for top-content slot       |\n| `--extendable-content-top-content-overflow-x` | Horizontal overflow of top-content slot |\n| `--extendable-content-top-content-overflow-y` | Vertical overflow of top-content slot   |\n| `--extendable-content-extended-content-min-height` | Min height of extended-content slot |\n| `--extendable-content-extended-content-min-width` | Min width of extended-content slot   |\n| `--extendable-content-extended-content-max-height` | Max height of extended-content slot |\n| `--extendable-content-extended-content-max-width` | Max width of extended-content slot   |\n| `--extendable-content-extended-content-justify-content` | Justify content for extended-content slot |\n| `--extendable-content-extended-content-align-items` | Align items for extended-content slot |\n| `--extendable-content-extended-content-overflow-x` | Horizontal overflow of extended-content slot |\n| `--extendable-content-extended-content-overflow-y` | Vertical overflow of extended-content slot |\n| `--extendable-content-button-height`    | Height of extend button                       |\n| `--extendable-content-button-width`     | Width of extend button                        |\n| `--extendable-content-button-border-radius` | Border radius of extend button            |\n| `--extendable-content-button-bg-color`  | Background color of extend button             |\n| `--extendable-content-button-hover-bg-color` | Hover background of extend button       |\n| `--extendable-content-button-icon-height` | Height of button icon                       |\n| `--extendable-content-button-icon-width` | Width of button icon                        |\n        \n#### Shadow DOM Parts\n\n| Part Name         | Description                                 |\n|-------------------|---------------------------------------------|\n| `container`         | The main container wrapping all content.      |\n| `top-container`     | The top section container (button + content). |\n| `top-content`       | The slot for the top content area.            |\n| `extend-button`     | The button used to toggle extension.          |\n| `extended-content`  | The slot for the extended content area.       |\n"}}},argTypes:{contWidth:{control:"text",description:"Width of the main container",table:{defaultValue:{summary:"500px"},category:"Container"}},contBorder:{control:"text",description:"Border styling of the container",table:{defaultValue:{summary:"2px #fafafa solid"},category:"Container"}},contBorderRadius:{control:"text",description:"Border radius of the container",table:{defaultValue:{summary:"8px"},category:"Container"}},contColor:{control:"color",description:"Background color of the container",table:{defaultValue:{summary:"#f5f5f5"},category:"Container"}},contShadow:{control:"text",description:"Box shadow of the container",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Container"}},contPadding:{control:"text",description:"Padding inside the container",table:{defaultValue:{summary:"5px"},category:"Container"}},contHoverBorder:{control:"text",description:"Border style on hover",table:{defaultValue:{summary:"2px #6a7ea5 dashed"},category:"Container: Hover"}},contHoverColor:{control:"color",description:"Background color on hover",table:{defaultValue:{summary:"#f5f5f5"},category:"Container: Hover"}},contActiveBorder:{control:"text",description:"Border style when active",table:{defaultValue:{summary:"2px #6a7ea5 solid"},category:"Container: Active"}},contActiveColor:{control:"color",description:"Background color when active",table:{defaultValue:{summary:"#add8e6"},category:"Container: Active"}},topBottomGap:{control:"text",description:"Gap between top container and extended content",table:{defaultValue:{summary:"5px"},category:"Top Container"}},topHeight:{control:"text",description:"Height of the top container",table:{defaultValue:{summary:"25px"},category:"Top Container"}},topWidth:{control:"text",description:"Width of the top container",table:{defaultValue:{summary:"100%"},category:"Top Container"}},topContentMinHeight:{control:"text",description:"Min height of the top content",table:{defaultValue:{summary:"100%"},category:"Top Content"}},topContentMinWidth:{control:"text",description:"Min width of the top content",table:{defaultValue:{summary:"calc(100% - 30px)"},category:"Top Content"}},topContentMaxHeight:{control:"text",description:"Max height of the top content",table:{defaultValue:{summary:"100%"},category:"Top Content"}},topContentMaxWidth:{control:"text",description:"Max width of the top content",table:{defaultValue:{summary:"calc(100% - 30px)"},category:"Top Content"}},topContentJustifyC:{control:"text",description:"Justify content of the top content",table:{defaultValue:{summary:"space-between"},category:"Top Content"}},topContentAlignI:{control:"text",description:"Align items of the top content",table:{defaultValue:{summary:"center"},category:"Top Content"}},topContentOverflowX:{control:"text",description:"Overflow-x of the top content",table:{defaultValue:{summary:"hidden"},category:"Top Content"}},topContentOverflowY:{control:"text",description:"Overflow-y of the top content",table:{defaultValue:{summary:"hidden"},category:"Top Content"}},extendContentMinHeight:{control:"text",description:"Min height of the extended content",table:{defaultValue:{summary:"0px"},category:"Extended Content"}},extendContentMinWidth:{control:"text",description:"Min width of the extended content",table:{defaultValue:{summary:"100%"},category:"Extended Content"}},extendContentMaxHeight:{control:"text",description:"Max height of the extended content",table:{defaultValue:{summary:"fit-content"},category:"Extended Content"}},extendContentMaxWidth:{control:"text",description:"Max width of the extended content",table:{defaultValue:{summary:"100%"},category:"Extended Content"}},extendContentJustifyC:{control:"text",description:"Justify content of the extended content",table:{defaultValue:{summary:"start"},category:"Extended Content"}},extendContentAlignI:{control:"text",description:"Align items of the extended content",table:{defaultValue:{summary:"center"},category:"Extended Content"}},extendContentOverflowX:{control:"text",description:"Overflow-x of the extended content",table:{defaultValue:{summary:"hidden"},category:"Extended Content"}},extendContentOverflowY:{control:"text",description:"Overflow-y of the extended content",table:{defaultValue:{summary:"hidden"},category:"Extended Content"}},buttonHeight:{control:"text",description:"Height of the extend button",table:{defaultValue:{summary:"24px"},category:"Button"}},buttonWidth:{control:"text",description:"Width of the extend button",table:{defaultValue:{summary:"24px"},category:"Button"}},buttonBorderRadius:{control:"text",description:"Border radius of the extend button",table:{defaultValue:{summary:"24px"},category:"Button"}},buttonColor:{control:"color",description:"Background color of the extend button",table:{defaultValue:{summary:"#eceff1"},category:"Button"}},buttonHoverColor:{control:"color",description:"Hover background color of the extend button",table:{defaultValue:{summary:"#b0bec5"},category:"Button"}},buttonIconSrc:{control:"text",description:"Source URL for the button icon image",table:{defaultValue:{summary:void 0},category:"Button"}},buttonIconHeight:{control:"text",description:"Height of the button icon",table:{defaultValue:{summary:"12px"},category:"Button"}},buttonIconWidth:{control:"text",description:"Width of the button icon",table:{defaultValue:{summary:"12px"},category:"Button"}},extended:{control:"boolean",description:"Toggle extended state",table:{defaultValue:{summary:"false"},category:"State"}},active:{control:"boolean",description:"Toggle active state",table:{defaultValue:{summary:"false"},category:"State"}},hover:{control:"boolean",description:"Toggle hover style class",table:{defaultValue:{summary:"false"},category:"State"}}}},c=t=>p`
  <extendable-content
    .contWidth=${t.contWidth}
    .contBorder=${t.contBorder}
    .contBorderRadius=${t.contBorderRadius}
    .contColor=${t.contColor}
    .contShadow=${t.contShadow}
    .contPadding=${t.contPadding}
    .contHoverBorder=${t.contHoverBorder}
    .contHoverColor=${t.contHoverColor}
    .contActiveBorder=${t.contActiveBorder}
    .contActiveColor=${t.contActiveColor}
    .topBottomGap=${t.topBottomGap}
    .topHeight=${t.topHeight}
    .topWidth=${t.topWidth}
    .topContentMinHeight=${t.topContentMinHeight}
    .topContentMinWidth=${t.topContentMinWidth}
    .topContentMaxHeight=${t.topContentMaxHeight}
    .topContentMaxWidth=${t.topContentMaxWidth}
    .topContentJustifyC=${t.topContentJustifyC}
    .topContentAlignI=${t.topContentAlignI}
    .topContentOverflowX=${t.topContentOverflowX}
    .topContentOverflowY=${t.topContentOverflowY}
    .extendContentMinHeight=${t.extendContentMinHeight}
    .extendContentMinWidth=${t.extendContentMinWidth}
    .extendContentMaxHeight=${t.extendContentMaxHeight}
    .extendContentMaxWidth=${t.extendContentMaxWidth}
    .extendContentJustifyC=${t.extendContentJustifyC}
    .extendContentAlignI=${t.extendContentAlignI}
    .extendContentOverflowX=${t.extendContentOverflowX}
    .extendContentOverflowY=${t.extendContentOverflowY}
    .buttonHeight=${t.buttonHeight}
    .buttonWidth=${t.buttonWidth}
    .buttonBorderRadius=${t.buttonBorderRadius}
    .buttonColor=${t.buttonColor}
    .buttonHoverColor=${t.buttonHoverColor}
    .buttonIconSrc=${t.buttonIconSrc}
    .buttonIconHeight=${t.buttonIconHeight}
    .buttonIconWidth=${t.buttonIconWidth}
    .extended=${t.extended}
    .active=${t.active}
    .hover=${t.hover}
  >
    <div slot="top-content">Top Content Area</div>
    <div slot="extended-content">Extended Content Area</div>
  </extendable-content>
`;c.args={contWidth:"500px",contBorder:"2px #fafafa solid",contBorderRadius:"8px",contColor:"#f5f5f5",contShadow:"0px 2px 5px #d0d0d0",contPadding:"5px",contHoverBorder:"2px #6a7ea5 dashed",contHoverColor:"#f5f5f5",contActiveBorder:"2px #6a7ea5 solid",contActiveColor:"#add8e6",topBottomGap:"5px",topHeight:"25px",topWidth:"100%",topContentMinHeight:"100%",topContentMinWidth:"calc(100% - 30px)",topContentMaxHeight:"100%",topContentMaxWidth:"calc(100% - 30px)",topContentJustifyC:"space-between",topContentAlignI:"center",topContentOverflowX:"hidden",topContentOverflowY:"hidden",extendContentMinHeight:"0px",extendContentMinWidth:"100%",extendContentMaxHeight:"fit-content",extendContentMaxWidth:"100%",extendContentJustifyC:"start",extendContentAlignI:"center",extendContentOverflowX:"hidden",extendContentOverflowY:"hidden",buttonHeight:"24px",buttonWidth:"24px",buttonBorderRadius:"24px",buttonColor:"#eceff1",buttonHoverColor:"#b0bec5",buttonIconSrc:void 0,buttonIconHeight:"12px",buttonIconWidth:"12px",extended:!1,active:!1,hover:!1};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => html\`
  <extendable-content
    .contWidth=\${args.contWidth}
    .contBorder=\${args.contBorder}
    .contBorderRadius=\${args.contBorderRadius}
    .contColor=\${args.contColor}
    .contShadow=\${args.contShadow}
    .contPadding=\${args.contPadding}
    .contHoverBorder=\${args.contHoverBorder}
    .contHoverColor=\${args.contHoverColor}
    .contActiveBorder=\${args.contActiveBorder}
    .contActiveColor=\${args.contActiveColor}
    .topBottomGap=\${args.topBottomGap}
    .topHeight=\${args.topHeight}
    .topWidth=\${args.topWidth}
    .topContentMinHeight=\${args.topContentMinHeight}
    .topContentMinWidth=\${args.topContentMinWidth}
    .topContentMaxHeight=\${args.topContentMaxHeight}
    .topContentMaxWidth=\${args.topContentMaxWidth}
    .topContentJustifyC=\${args.topContentJustifyC}
    .topContentAlignI=\${args.topContentAlignI}
    .topContentOverflowX=\${args.topContentOverflowX}
    .topContentOverflowY=\${args.topContentOverflowY}
    .extendContentMinHeight=\${args.extendContentMinHeight}
    .extendContentMinWidth=\${args.extendContentMinWidth}
    .extendContentMaxHeight=\${args.extendContentMaxHeight}
    .extendContentMaxWidth=\${args.extendContentMaxWidth}
    .extendContentJustifyC=\${args.extendContentJustifyC}
    .extendContentAlignI=\${args.extendContentAlignI}
    .extendContentOverflowX=\${args.extendContentOverflowX}
    .extendContentOverflowY=\${args.extendContentOverflowY}
    .buttonHeight=\${args.buttonHeight}
    .buttonWidth=\${args.buttonWidth}
    .buttonBorderRadius=\${args.buttonBorderRadius}
    .buttonColor=\${args.buttonColor}
    .buttonHoverColor=\${args.buttonHoverColor}
    .buttonIconSrc=\${args.buttonIconSrc}
    .buttonIconHeight=\${args.buttonIconHeight}
    .buttonIconWidth=\${args.buttonIconWidth}
    .extended=\${args.extended}
    .active=\${args.active}
    .hover=\${args.hover}
  >
    <div slot="top-content">Top Content Area</div>
    <div slot="extended-content">Extended Content Area</div>
  </extendable-content>
\``,...c.parameters?.docs?.source}}};const M=["Default"];export{c as Default,M as __namedExportsOrder,m as default};
