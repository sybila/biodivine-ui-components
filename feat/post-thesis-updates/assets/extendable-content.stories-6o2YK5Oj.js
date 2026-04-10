import{i as b,a as u,x as l}from"./iframe-BDM-MoQd.js";import{n as d,t as f}from"./property-DZaq70-t.js";var h=Object.defineProperty,s=Object.getOwnPropertyDescriptor,y=(t,e,a)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,o=(t,e,a,i)=>{for(var c=i>1?void 0:i?s(e,a):e,x=t.length-1,p;x>=0;x--)(p=t[x])&&(c=(i?p(e,a,c):p(c))||c);return i&&c&&h(e,a,c),c},g=(t,e,a)=>y(t,typeof e!="symbol"?e+"":e,a);let n=class extends u{updateStyleVariable(t,e,a){const i=this[t]??a;this.style.setProperty(e,i)}updated(t){const e=(a,i,c)=>t.has(a)&&this.updateStyleVariable(a,i,c);e("compHeight","--extendable-content-comp-height","fit-content"),e("compWidth","--extendable-content-comp-width","500px"),e("contHeight","--extendable-content-cont-height","fit-content"),e("contWidth","--extendable-content-cont-width","100%"),e("contMaxHeight","--extendable-content-cont-max-height","fit-content"),e("contMaxWidth","--extendable-content-cont-max-width","100%"),e("contOverflowX","--extendable-content-cont-overflow-x","hidden"),e("contOverflowY","--extendable-content-cont-overflow-y","hidden"),e("contBorder","--extendable-content-cont-border","2px #fafafa solid"),e("contBorderRadius","--extendable-content-cont-border-radius","8px"),e("contColor","--extendable-content-cont-bg-color","#f5f5f5"),e("contShadow","--extendable-content-cont-shadow","0px 2px 5px #d0d0d0"),e("contPadding","--extendable-content-cont-padding","5px"),e("contHoverBorder","--extendable-content-cont-hover-border","2px #6a7ea5 dashed"),e("contHoverColor","--extendable-content-hover-bg-color","#f5f5f5"),e("contActiveBorder","--extendable-content-active-border","2px #6a7ea5 solid"),e("contActiveColor","--extendable-content-active-bg-color","#add8e6"),e("contExtendedHeight","--extendable-content-cont-extended-height","200px"),e("contExtendedMaxHeight","--extendable-content-cont-extended-max-height","200px"),e("topBottomGap","--extendable-content-top-bottom-gap","5px"),e("topHeight","--extendable-content-top-height","25px"),e("topWidth","--extendable-content-top-width","100%"),e("topMaxHeight","--extendable-content-top-max-height","25px"),e("topMaxWidth","--extendable-content-top-max-width","100%"),e("topJustifyC","--extendable-content-top-justify-content","space-between"),e("topAlignI","--extendable-content-top-align-items","center"),e("topOverflowX","--extendable-content-top-overflow-x","hidden"),e("topOverflowY","--extendable-content-top-overflow-y","hidden"),e("topContentHeight","--extendable-content-top-content-height","100%"),e("topContentWidth","--extendable-content-top-content-width","calc(100% - 30px)"),e("topContentMaxHeight","--extendable-content-top-content-max-height","100%"),e("topContentMaxWidth","--extendable-content-top-content-max-width","calc(100% - 30px)"),e("topContentJustifyC","--extendable-content-top-content-justify-content","space-between"),e("topContentAlignI","--extendable-content-top-content-align-items","center"),e("topContentOverflowX","--extendable-content-top-content-overflow-x","hidden"),e("topContentOverflowY","--extendable-content-top-content-overflow-y","hidden"),e("extendContentHeight","--extendable-content-extended-content-height","calc(100% - 30px)"),e("extendContentWidth","--extendable-content-extended-content-width","100%"),e("extendContentMaxHeight","--extendable-content-extended-content-max-height","calc(100% - 30px)"),e("extendContentMaxWidth","--extendable-content-extended-content-max-width","100%"),e("extendContentJustifyC","--extendable-content-extended-content-justify-content","start"),e("extendContentAlignI","--extendable-content-extended-content-align-items","center"),e("extendContentOverflowX","--extendable-content-extended-content-overflow-x","hidden"),e("extendContentOverflowY","--extendable-content-extended-content-overflow-y","hidden"),e("buttonHeight","--extendable-content-button-height","24px"),e("buttonWidth","--extendable-content-button-width","24px"),e("buttonMaxHeight","--extendable-content-button-max-height","24px"),e("buttonMaxWidth","--extendable-content-button-max-width","24px"),e("buttonBorderRadius","--extendable-content-button-border-radius","24px"),e("buttonColor","--extendable-content-button-bg-color","#eceff1"),e("buttonHoverColor","--extendable-content-button-hover-bg-color","#b0bec5"),e("buttonIconHeight","--extendable-content-button-icon-height","12px"),e("buttonIconWidth","--extendable-content-button-icon-width","12px")}toggleExtend=()=>{this.extended=!this.extended};render(){const t=this.extended?"extended":"",e=this.active?"active":"",a=this.hover?"hover":"";return l`<div
      id="container"
      part="container"
      class="${t} ${e} ${a}"
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

      ${this.extended?l` <slot
            id="extended-content"
            name="extended-content"
            part="extended-content"
          ></slot>`:""}
    </div> `}};g(n,"styles",b`
    :host {
      display: inline-block;
      height: var(--extendable-content-comp-height, fit-content);
      width: var(--extendable-content-comp-width, 500px);
      max-height: var(--extendable-content-comp-height, fit-content);
      max-width: var(--extendable-content-comp-width, 500px);
    }

    #container {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      height: var(--extendable-content-cont-height, fit-content);
      width: var(--extendable-content-cont-width, 100%);
      max-height: var(--extendable-content-cont-max-height, fit-content);
      max-width: var(--extendable-content-cont-max-width, 100%);

      overflow-x: var(--extendable-content-cont-overflow-x, hidden);
      overflow-y: var(--extendable-content-cont-overflow-y, hidden);

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

    #container.extended {
      height: var(--extendable-content-cont-extended-height, 200px);
      max-height: var(--extendable-content-cont-extended-max-height, 200px);
    }

    #top-container {
      display: flex;

      justify-content: var(
        --extendable-content-top-justify-content,
        space-between
      );
      align-items: var(--extendable-content-top-align-items, center);

      height: var(--extendable-content-top-height, 25px);
      width: var(--extendable-content-top-width, 100%);
      max-height: var(--extendable-content-top-max-height, 25px);
      max-width: var(--extendable-content-top-max-width, 100%);

      overflow-x: var(--extendable-content-top-overflow-x, hidden);
      overflow-y: var(--extendable-content-top-overflow-y, hidden);
    }

    #top-content {
      display: flex;

      justify-content: var(
        --extendable-content-top-content-justify-content,
        space-between
      );
      align-items: var(--extendable-content-top-content-align-items, center);

      height: var(--extendable-content-top-content-height, 100%);
      width: var(--extendable-content-top-content-width, calc(100% - 30px));
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

      height: var(
        --extendable-content-extended-content-height,
        calc(100% - 30px)
      );
      width: var(--extendable-content-extended-content-width, 100%);
      max-height: var(
        --extendable-content-extended-content-max-height,
        calc(100% - 30px)
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
  `);g(n,"arrowIcon","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgLTQuNSAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+YXJyb3dfZG93biBbIzMzOF08L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPg0KDQo8L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJEcmliYmJsZS1MaWdodC1QcmV2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIwLjAwMDAwMCwgLTY2ODQuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+DQogICAgICAgICAgICA8ZyBpZD0iaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2LjAwMDAwMCwgMTYwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjQuMjkyMzA4LDY1MjQuMzY1ODMgTDE2NC4yOTIzMDgsNjUyNC4zNjU4MyBDMTYzLjkwMjU2NCw2NTI0Ljc3MDcxIDE2My45MDI1NjQsNjUyNS40MjYxOSAxNjQuMjkyMzA4LDY1MjUuODMwMDQgTDE3Mi41NTU4NzMsNjUzNC4zOTI2NyBDMTczLjMzNjM2LDY1MzUuMjAyNDQgMTc0LjYwMjUyOCw2NTM1LjIwMjQ0IDE3NS4zODMwMTQsNjUzNC4zOTI2NyBMMTgzLjcwNzU0LDY1MjUuNzY3OTEgQzE4NC4wOTMyODYsNjUyNS4zNjcxNiAxODQuMDk4MjgzLDY1MjQuNzE5OTcgMTgzLjcxNzUzMyw2NTI0LjMxNDA1IEMxODMuMzI4Nzg5LDY1MjMuODk5ODUgMTgyLjY4ODIxLDY1MjMuODk0NjcgMTgyLjI5MzQ3LDY1MjQuMzAyNjYgTDE3NC42NzY0NzksNjUzMi4xOTYzNiBDMTc0LjI4NTczNiw2NTMyLjYwMTI0IDE3My42NTMxNTIsNjUzMi42MDEyNCAxNzMuMjYyNDA5LDY1MzIuMTk2MzYgTDE2NS43MDUzNzksNjUyNC4zNjU4MyBDMTY1LjMxNTYzNSw2NTIzLjk2MDk0IDE2NC42ODMwNTEsNjUyMy45NjA5NCAxNjQuMjkyMzA4LDY1MjQuMzY1ODMiIGlkPSJhcnJvd19kb3duLVsjMzM4XSI+DQoNCjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==");o([d({type:String})],n.prototype,"compHeight",2);o([d({type:String})],n.prototype,"compWidth",2);o([d({type:String})],n.prototype,"contHeight",2);o([d({type:String})],n.prototype,"contWidth",2);o([d({type:String})],n.prototype,"contMaxHeight",2);o([d({type:String})],n.prototype,"contMaxWidth",2);o([d({type:String})],n.prototype,"contOverflowX",2);o([d({type:String})],n.prototype,"contOverflowY",2);o([d({type:String})],n.prototype,"contBorder",2);o([d({type:String})],n.prototype,"contBorderRadius",2);o([d({type:String})],n.prototype,"contColor",2);o([d({type:String})],n.prototype,"contShadow",2);o([d({type:String})],n.prototype,"contPadding",2);o([d({type:String})],n.prototype,"contHoverBorder",2);o([d({type:String})],n.prototype,"contHoverColor",2);o([d({type:String})],n.prototype,"contActiveBorder",2);o([d({type:String})],n.prototype,"contActiveColor",2);o([d({type:String})],n.prototype,"contExtendedHeight",2);o([d({type:String})],n.prototype,"contExtendedMaxHeight",2);o([d({type:String})],n.prototype,"topBottomGap",2);o([d({type:String})],n.prototype,"topHeight",2);o([d({type:String})],n.prototype,"topWidth",2);o([d({type:String})],n.prototype,"topMaxHeight",2);o([d({type:String})],n.prototype,"topMaxWidth",2);o([d({type:String})],n.prototype,"topJustifyC",2);o([d({type:String})],n.prototype,"topAlignI",2);o([d({type:String})],n.prototype,"topOverflowX",2);o([d({type:String})],n.prototype,"topOverflowY",2);o([d({type:String})],n.prototype,"topContentHeight",2);o([d({type:String})],n.prototype,"topContentWidth",2);o([d({type:String})],n.prototype,"topContentMaxHeight",2);o([d({type:String})],n.prototype,"topContentMaxWidth",2);o([d({type:String})],n.prototype,"topContentJustifyC",2);o([d({type:String})],n.prototype,"topContentAlignI",2);o([d({type:String})],n.prototype,"topContentOverflowX",2);o([d({type:String})],n.prototype,"topContentOverflowY",2);o([d({type:String})],n.prototype,"extendContentHeight",2);o([d({type:String})],n.prototype,"extendContentWidth",2);o([d({type:String})],n.prototype,"extendContentMaxHeight",2);o([d({type:String})],n.prototype,"extendContentMaxWidth",2);o([d({type:String})],n.prototype,"extendContentJustifyC",2);o([d({type:String})],n.prototype,"extendContentAlignI",2);o([d({type:String})],n.prototype,"extendContentOverflowX",2);o([d({type:String})],n.prototype,"extendContentOverflowY",2);o([d({type:String})],n.prototype,"buttonHeight",2);o([d({type:String})],n.prototype,"buttonWidth",2);o([d({type:String})],n.prototype,"buttonMaxHeight",2);o([d({type:String})],n.prototype,"buttonMaxWidth",2);o([d({type:String})],n.prototype,"buttonBorderRadius",2);o([d({type:String})],n.prototype,"buttonColor",2);o([d({type:String})],n.prototype,"buttonHoverColor",2);o([d({type:String})],n.prototype,"buttonIconSrc",2);o([d({type:String})],n.prototype,"buttonIconHeight",2);o([d({type:String})],n.prototype,"buttonIconWidth",2);o([d({type:Boolean})],n.prototype,"extended",2);o([d({type:Boolean})],n.prototype,"active",2);o([d({type:Boolean})],n.prototype,"hover",2);o([d({type:Function})],n.prototype,"handleMouseEnter",2);o([d({type:Function})],n.prototype,"handleMouseLeave",2);n=o([f("extendable-content")],n);const m={title:"Components/Content Panels/Extendable Content",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<extendable-content>`\n\nContainer component that can toggle between collapsed and extended states.\n\n#### CSS Custom Properties\n\n| Variable                                 | Description                                   |\n|------------------------------------------|-----------------------------------------------|\n| `--extendable-content-comp-height`      | Height of the outer component                  |\n| `--extendable-content-comp-width`       | Width of the outer component                   |\n| `--extendable-content-cont-height`      | Height of the main container                    |\n| `--extendable-content-cont-width`       | Width of the main container                     |\n| `--extendable-content-cont-max-height`  | Max height of the main container                |\n| `--extendable-content-cont-max-width`   | Max width of the main container                 |\n| `--extendable-content-cont-overflow-x`  | Horizontal overflow behavior                     |\n| `--extendable-content-cont-overflow-y`  | Vertical overflow behavior                       |\n| `--extendable-content-cont-border`      | Border styling of the container                  |\n| `--extendable-content-cont-border-radius` | Border radius of the container                   |\n| `--extendable-content-cont-bg-color`    | Background color of the container                |\n| `--extendable-content-cont-shadow`      | Box shadow of the container                       |\n| `--extendable-content-cont-padding`     | Padding inside the container                      |\n| `--extendable-content-cont-hover-border`| Border on hover                                  |\n| `--extendable-content-hover-bg-color`   | Background color on hover                         |\n| `--extendable-content-active-border`    | Border when active                                |\n| `--extendable-content-active-bg-color`  | Background color when active                       |\n| `--extendable-content-cont-extended-height` | Height when extended                           |\n| `--extendable-content-cont-extended-max-height` | Max height when extended                  |\n| `--extendable-content-top-bottom-gap`   | Gap between top and bottom sections              |\n| `--extendable-content-top-height`       | Height of the top container                      |\n| `--extendable-content-top-width`        | Width of the top container                       |\n| `--extendable-content-top-max-height`   | Max height of the top container                  |\n| `--extendable-content-top-max-width`    | Max width of the top container                   |\n| `--extendable-content-top-justify-content` | Justify content of the top container         |\n| `--extendable-content-top-align-items`  | Align items of the top container                 |\n| `--extendable-content-top-overflow-x`   | Overflow-x of the top container                  |\n| `--extendable-content-top-overflow-y`   | Overflow-y of the top container                  |\n| `--extendable-content-top-content-height` | Height of the top content                     |\n| `--extendable-content-top-content-width` | Width of the top content                       |\n| `--extendable-content-top-content-max-height` | Max height of the top content             |\n| `--extendable-content-top-content-max-width` | Max width of the top content               |\n| `--extendable-content-top-content-justify-content` | Justify content of the top content      |\n| `--extendable-content-top-content-align-items` | Align items of the top content            |\n| `--extendable-content-top-content-overflow-x` | Overflow-x of the top content             |\n| `--extendable-content-top-content-overflow-y` | Overflow-y of the top content             |\n| `--extendable-content-extended-content-height` | Height of the extended content           |\n| `--extendable-content-extended-content-width` | Width of the extended content             |\n| `--extendable-content-extended-content-max-height` | Max height of the extended content   |\n| `--extendable-content-extended-content-max-width` | Max width of the extended content     |\n| `--extendable-content-extended-content-justify-content` | Justify content of the extended content |\n| `--extendable-content-extended-content-align-items` | Align items of the extended content     |\n| `--extendable-content-extended-content-overflow-x` | Overflow-x of the extended content      |\n| `--extendable-content-extended-content-overflow-y` | Overflow-y of the extended content      |\n| `--extendable-content-button-height`    | Height of the extend button                   |\n| `--extendable-content-button-width`     | Width of the extend button                    |\n| `--extendable-content-button-max-height`| Max height of the extend button               |\n| `--extendable-content-button-max-width` | Max width of the extend button                |\n| `--extendable-content-button-border-radius` | Border radius of the extend button        |\n| `--extendable-content-button-bg-color`  | Background color of the extend button         |\n| `--extendable-content-button-hover-bg-color` | Hover background color of the button     |\n| `--extendable-content-button-icon-height` | Height of the button icon                 |\n| `--extendable-content-button-icon-width` | Width of the button icon                  |\n        \n#### Shadow DOM Parts\n\n| Part Name         | Description                                 |\n|-------------------|---------------------------------------------|\n| `container`         | The main container wrapping all content.      |\n| `top-container`     | The top section container (button + content). |\n| `top-content`       | The slot for the top content area.            |\n| `extend-button`     | The button used to toggle extension.          |\n| `extended-content`  | The slot for the extended content area.       |\n"}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{defaultValue:{summary:"fit-content"},category:"Layout"}},compWidth:{control:"text",description:"Width of the outer component container",table:{defaultValue:{summary:"500px"},category:"Layout"}},contHeight:{control:"text",description:"Height of the main container",table:{defaultValue:{summary:"fit-content"},category:"Container"}},contWidth:{control:"text",description:"Width of the main container",table:{defaultValue:{summary:"100%"},category:"Container"}},contMaxHeight:{control:"text",description:"Max height of the main container",table:{defaultValue:{summary:"fit-content"},category:"Container"}},contMaxWidth:{control:"text",description:"Max width of the main container",table:{defaultValue:{summary:"100%"},category:"Container"}},contOverflowX:{control:"text",description:"Horizontal overflow of the main container",table:{defaultValue:{summary:"hidden"},category:"Container"}},contOverflowY:{control:"text",description:"Vertical overflow of the main container",table:{defaultValue:{summary:"hidden"},category:"Container"}},contBorder:{control:"text",description:"Border styling of the container",table:{defaultValue:{summary:"2px #fafafa solid"},category:"Container"}},contBorderRadius:{control:"text",description:"Border radius of the container",table:{defaultValue:{summary:"8px"},category:"Container"}},contColor:{control:"color",description:"Background color of the container",table:{defaultValue:{summary:"#f5f5f5"},category:"Container"}},contShadow:{control:"text",description:"Box shadow of the container",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Container"}},contPadding:{control:"text",description:"Padding inside the container",table:{defaultValue:{summary:"5px"},category:"Container"}},contHoverBorder:{control:"text",description:"Border style on hover",table:{defaultValue:{summary:"2px #6a7ea5 dashed"},category:"Container: Hover"}},contHoverColor:{control:"color",description:"Background color on hover",table:{defaultValue:{summary:"#f5f5f5"},category:"Container: Hover"}},contActiveBorder:{control:"text",description:"Border style when active",table:{defaultValue:{summary:"2px #6a7ea5 solid"},category:"Container: Active"}},contActiveColor:{control:"color",description:"Background color when active",table:{defaultValue:{summary:"#add8e6"},category:"Container: Active"}},contExtendedHeight:{control:"text",description:"Height when extended",table:{defaultValue:{summary:"200px"},category:"Container: Extended"}},contExtendedMaxHeight:{control:"text",description:"Max height when extended",table:{defaultValue:{summary:"200px"},category:"Container: Extended"}},topBottomGap:{control:"text",description:"Gap between top and bottom sections",table:{defaultValue:{summary:"5px"},category:"Top Section"}},topHeight:{control:"text",description:"Height of the top container",table:{defaultValue:{summary:"25px"},category:"Top Section"}},topWidth:{control:"text",description:"Width of the top container",table:{defaultValue:{summary:"100%"},category:"Top Section"}},topMaxHeight:{control:"text",description:"Max height of the top container",table:{defaultValue:{summary:"25px"},category:"Top Section"}},topMaxWidth:{control:"text",description:"Max width of the top container",table:{defaultValue:{summary:"100%"},category:"Top Section"}},topJustifyC:{control:"text",description:"Justify content of the top container",table:{defaultValue:{summary:"space-between"},category:"Top Section"}},topAlignI:{control:"text",description:"Align items of the top container",table:{defaultValue:{summary:"center"},category:"Top Section"}},topOverflowX:{control:"text",description:"Overflow-x of the top container",table:{defaultValue:{summary:"hidden"},category:"Top Section"}},topOverflowY:{control:"text",description:"Overflow-y of the top container",table:{defaultValue:{summary:"hidden"},category:"Top Section"}},topContentHeight:{control:"text",description:"Height of the top content",table:{defaultValue:{summary:"100%"},category:"Top Content"}},topContentWidth:{control:"text",description:"Width of the top content",table:{defaultValue:{summary:"calc(100% - 30px)"},category:"Top Content"}},topContentMaxHeight:{control:"text",description:"Max height of the top content",table:{defaultValue:{summary:"100%"},category:"Top Content"}},topContentMaxWidth:{control:"text",description:"Max width of the top content",table:{defaultValue:{summary:"calc(100% - 30px)"},category:"Top Content"}},topContentJustifyC:{control:"text",description:"Justify content of the top content",table:{defaultValue:{summary:"space-between"},category:"Top Content"}},topContentAlignI:{control:"text",description:"Align items of the top content",table:{defaultValue:{summary:"center"},category:"Top Content"}},topContentOverflowX:{control:"text",description:"Overflow-x of the top content",table:{defaultValue:{summary:"hidden"},category:"Top Content"}},topContentOverflowY:{control:"text",description:"Overflow-y of the top content",table:{defaultValue:{summary:"hidden"},category:"Top Content"}},extendContentHeight:{control:"text",description:"Height of the extended content",table:{defaultValue:{summary:"calc(100% - 30px)"},category:"Extended Content"}},extendContentWidth:{control:"text",description:"Width of the extended content",table:{defaultValue:{summary:"100%"},category:"Extended Content"}},extendContentMaxHeight:{control:"text",description:"Max height of the extended content",table:{defaultValue:{summary:"calc(100% - 30px)"},category:"Extended Content"}},extendContentMaxWidth:{control:"text",description:"Max width of the extended content",table:{defaultValue:{summary:"100%"},category:"Extended Content"}},extendContentJustifyC:{control:"text",description:"Justify content of the extended content",table:{defaultValue:{summary:"start"},category:"Extended Content"}},extendContentAlignI:{control:"text",description:"Align items of the extended content",table:{defaultValue:{summary:"center"},category:"Extended Content"}},extendContentOverflowX:{control:"text",description:"Overflow-x of the extended content",table:{defaultValue:{summary:"hidden"},category:"Extended Content"}},extendContentOverflowY:{control:"text",description:"Overflow-y of the extended content",table:{defaultValue:{summary:"hidden"},category:"Extended Content"}},buttonHeight:{control:"text",description:"Height of the extend button",table:{defaultValue:{summary:"24px"},category:"Button"}},buttonWidth:{control:"text",description:"Width of the extend button",table:{defaultValue:{summary:"24px"},category:"Button"}},buttonMaxHeight:{control:"text",description:"Max height of the extend button",table:{defaultValue:{summary:"24px"},category:"Button"}},buttonMaxWidth:{control:"text",description:"Max width of the extend button",table:{defaultValue:{summary:"24px"},category:"Button"}},buttonBorderRadius:{control:"text",description:"Border radius of the extend button",table:{defaultValue:{summary:"24px"},category:"Button"}},buttonColor:{control:"color",description:"Background color of the extend button",table:{defaultValue:{summary:"#eceff1"},category:"Button"}},buttonHoverColor:{control:"color",description:"Hover background color of the extend button",table:{defaultValue:{summary:"#b0bec5"},category:"Button"}},buttonIconSrc:{control:"text",description:"Source URL for the button icon image",table:{defaultValue:{summary:void 0},category:"Button"}},buttonIconHeight:{control:"text",description:"Height of the button icon",table:{defaultValue:{summary:"12px"},category:"Button"}},buttonIconWidth:{control:"text",description:"Width of the button icon",table:{defaultValue:{summary:"12px"},category:"Button"}},extended:{control:"boolean",description:"Toggle extended state",table:{defaultValue:{summary:"false"},category:"State"}},active:{control:"boolean",description:"Toggle active state",table:{defaultValue:{summary:"false"},category:"State"}}}},r=t=>l`
  <extendable-content
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .contHeight=${t.contHeight}
    .contWidth=${t.contWidth}
    .contMaxHeight=${t.contMaxHeight}
    .contMaxWidth=${t.contMaxWidth}
    .contOverflowX=${t.contOverflowX}
    .contOverflowY=${t.contOverflowY}
    .contBorder=${t.contBorder}
    .contBorderRadius=${t.contBorderRadius}
    .contColor=${t.contColor}
    .contShadow=${t.contShadow}
    .contPadding=${t.contPadding}
    .contHoverBorder=${t.contHoverBorder}
    .contHoverColor=${t.contHoverColor}
    .contActiveBorder=${t.contActiveBorder}
    .contActiveColor=${t.contActiveColor}
    .contExtendedHeight=${t.contExtendedHeight}
    .contExtendedMaxHeight=${t.contExtendedMaxHeight}
    .topBottomGap=${t.topBottomGap}
    .topHeight=${t.topHeight}
    .topWidth=${t.topWidth}
    .topMaxHeight=${t.topMaxHeight}
    .topMaxWidth=${t.topMaxWidth}
    .topJustifyC=${t.topJustifyC}
    .topAlignI=${t.topAlignI}
    .topOverflowX=${t.topOverflowX}
    .topOverflowY=${t.topOverflowY}
    .topContentHeight=${t.topContentHeight}
    .topContentWidth=${t.topContentWidth}
    .topContentMaxHeight=${t.topContentMaxHeight}
    .topContentMaxWidth=${t.topContentMaxWidth}
    .topContentJustifyC=${t.topContentJustifyC}
    .topContentAlignI=${t.topContentAlignI}
    .topContentOverflowX=${t.topContentOverflowX}
    .topContentOverflowY=${t.topContentOverflowY}
    .extendContentHeight=${t.extendContentHeight}
    .extendContentWidth=${t.extendContentWidth}
    .extendContentMaxHeight=${t.extendContentMaxHeight}
    .extendContentMaxWidth=${t.extendContentMaxWidth}
    .extendContentJustifyC=${t.extendContentJustifyC}
    .extendContentAlignI=${t.extendContentAlignI}
    .extendContentOverflowX=${t.extendContentOverflowX}
    .extendContentOverflowY=${t.extendContentOverflowY}
    .buttonHeight=${t.buttonHeight}
    .buttonWidth=${t.buttonWidth}
    .buttonMaxHeight=${t.buttonMaxHeight}
    .buttonMaxWidth=${t.buttonMaxWidth}
    .buttonBorderRadius=${t.buttonBorderRadius}
    .buttonColor=${t.buttonColor}
    .buttonHoverColor=${t.buttonHoverColor}
    .buttonIconSrc=${t.buttonIconSrc}
    .buttonIconHeight=${t.buttonIconHeight}
    .buttonIconWidth=${t.buttonIconWidth}
    .extended=${t.extended}
    .active=${t.active}
  >
    <div slot="top-content">Top Content Area</div>
    ${t.extended?l`<div slot="extended-content">Extended Content Area</div>`:""}
  </extendable-content>
`;r.args={compHeight:"fit-content",compWidth:"500px",contHeight:"fit-content",contWidth:"100%",contMaxHeight:"fit-content",contMaxWidth:"100%",contOverflowX:"hidden",contOverflowY:"hidden",contBorder:"2px #fafafa solid",contBorderRadius:"8px",contColor:"#f5f5f5",contShadow:"0px 2px 5px #d0d0d0",contPadding:"5px",contHoverBorder:"2px #6a7ea5 dashed",contHoverColor:"#f5f5f5",contActiveBorder:"2px #6a7ea5 solid",contActiveColor:"#add8e6",contExtendedHeight:"200px",contExtendedMaxHeight:"200px",topBottomGap:"5px",topHeight:"25px",topWidth:"100%",topMaxHeight:"25px",topMaxWidth:"100%",topJustifyC:"space-between",topAlignI:"center",topOverflowX:"hidden",topOverflowY:"hidden",topContentHeight:"100%",topContentWidth:"calc(100% - 30px)",topContentMaxHeight:"100%",topContentMaxWidth:"calc(100% - 30px)",topContentJustifyC:"space-between",topContentAlignI:"center",topContentOverflowX:"hidden",topContentOverflowY:"hidden",extendContentHeight:"calc(100% - 30px)",extendContentWidth:"100%",extendContentMaxHeight:"calc(100% - 30px)",extendContentMaxWidth:"100%",extendContentJustifyC:"start",extendContentAlignI:"center",extendContentOverflowX:"hidden",extendContentOverflowY:"hidden",buttonHeight:"24px",buttonWidth:"24px",buttonMaxHeight:"24px",buttonMaxWidth:"24px",buttonBorderRadius:"24px",buttonColor:"#eceff1",buttonHoverColor:"#b0bec5",buttonIconSrc:void 0,buttonIconHeight:"12px",buttonIconWidth:"12px",extended:!1,active:!1};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => html\`
  <extendable-content
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .contHeight=\${args.contHeight}
    .contWidth=\${args.contWidth}
    .contMaxHeight=\${args.contMaxHeight}
    .contMaxWidth=\${args.contMaxWidth}
    .contOverflowX=\${args.contOverflowX}
    .contOverflowY=\${args.contOverflowY}
    .contBorder=\${args.contBorder}
    .contBorderRadius=\${args.contBorderRadius}
    .contColor=\${args.contColor}
    .contShadow=\${args.contShadow}
    .contPadding=\${args.contPadding}
    .contHoverBorder=\${args.contHoverBorder}
    .contHoverColor=\${args.contHoverColor}
    .contActiveBorder=\${args.contActiveBorder}
    .contActiveColor=\${args.contActiveColor}
    .contExtendedHeight=\${args.contExtendedHeight}
    .contExtendedMaxHeight=\${args.contExtendedMaxHeight}
    .topBottomGap=\${args.topBottomGap}
    .topHeight=\${args.topHeight}
    .topWidth=\${args.topWidth}
    .topMaxHeight=\${args.topMaxHeight}
    .topMaxWidth=\${args.topMaxWidth}
    .topJustifyC=\${args.topJustifyC}
    .topAlignI=\${args.topAlignI}
    .topOverflowX=\${args.topOverflowX}
    .topOverflowY=\${args.topOverflowY}
    .topContentHeight=\${args.topContentHeight}
    .topContentWidth=\${args.topContentWidth}
    .topContentMaxHeight=\${args.topContentMaxHeight}
    .topContentMaxWidth=\${args.topContentMaxWidth}
    .topContentJustifyC=\${args.topContentJustifyC}
    .topContentAlignI=\${args.topContentAlignI}
    .topContentOverflowX=\${args.topContentOverflowX}
    .topContentOverflowY=\${args.topContentOverflowY}
    .extendContentHeight=\${args.extendContentHeight}
    .extendContentWidth=\${args.extendContentWidth}
    .extendContentMaxHeight=\${args.extendContentMaxHeight}
    .extendContentMaxWidth=\${args.extendContentMaxWidth}
    .extendContentJustifyC=\${args.extendContentJustifyC}
    .extendContentAlignI=\${args.extendContentAlignI}
    .extendContentOverflowX=\${args.extendContentOverflowX}
    .extendContentOverflowY=\${args.extendContentOverflowY}
    .buttonHeight=\${args.buttonHeight}
    .buttonWidth=\${args.buttonWidth}
    .buttonMaxHeight=\${args.buttonMaxHeight}
    .buttonMaxWidth=\${args.buttonMaxWidth}
    .buttonBorderRadius=\${args.buttonBorderRadius}
    .buttonColor=\${args.buttonColor}
    .buttonHoverColor=\${args.buttonHoverColor}
    .buttonIconSrc=\${args.buttonIconSrc}
    .buttonIconHeight=\${args.buttonIconHeight}
    .buttonIconWidth=\${args.buttonIconWidth}
    .extended=\${args.extended}
    .active=\${args.active}
  >
    <div slot="top-content">Top Content Area</div>
    \${args.extended ? html\`<div slot="extended-content">Extended Content Area</div>\` : ''}
  </extendable-content>
\``,...r.parameters?.docs?.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,m as default};
