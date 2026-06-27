import{i as w,a as f,x as h}from"./iframe-CNlLuM1E.js";import{n as o,t as u}from"./property-CZb9rINV.js";import{r as c}from"./state-B25s696z.js";import"./content-window-C0TRASxW.js";import"./text-button-Cj5Hoatf.js";var d=Object.defineProperty,y=Object.getOwnPropertyDescriptor,x=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,a=(t,e,r,n)=>{for(var i=n>1?void 0:n?y(e,r):e,g=t.length-1,m;g>=0;g--)(m=t[g])&&(i=(n?m(e,r,i):m(i))||i);return n&&i&&d(e,r,i),i},b=(t,e,r)=>x(t,e+"",r);class v{instance=null;findGlobalMessage(){if(this.instance)return this.instance;const e=document.querySelector("message-wrapper");return e?(this.instance=e,e):null}showSuccess(e,r=3e3){const n=this.findGlobalMessage();n&&n.show("success",e,r)}showError(e,r=3e3){const n=this.findGlobalMessage();n&&n.show("error",e,r)}showInfo(e,r=3e3){const n=this.findGlobalMessage();n&&n.show("info",e,r)}}const l=new v;let s=class extends f{show(t,e,r=3e3){this.type=t,this.message=e,this.visible=!0,setTimeout(()=>{this.visible=!1},r)}updateStyleVariable(t,e,r){const n=this[t]??r;this.style.setProperty(e,n)}updated(t){const e=(r,n,i)=>t.has(r)&&this.updateStyleVariable(r,n,i);e("compHeight","--message-wrapper-comp-height","100%"),e("compWidth","--message-wrapper-comp-width","100%"),e("compZindex","--message-wrapper-z-index","1000000000"),e("wrapperHeight","--message-wrapper-height","100%"),e("wrapperWidth","--message-wrapper-width","100%"),e("wrapperOverflowX","--message-wrapper-overflow-x","hidden"),e("wrapperOverflowY","--message-wrapper-overflow-y","hidden"),e("messageHeight","--message-wrapper-message-height","fit-content"),e("messageWidth","--message-wrapper-message-width","250px"),e("messageLineHeight","--message-wrapper-message-line-height","18px"),e("messagePad","--message-wrapper-message-padding","15px"),e("messageTop","--message-wrapper-message-top","20px"),e("messageBottom","--message-wrapper-message-bottom","auto"),e("messageLeft","--message-wrapper-message-left","50%"),e("messageRight","--message-wrapper-message-right","50%"),e("messageColor","--message-wrapper-message-color","#eceff1"),e("messageShadow","--message-wrapper-message-shadow","0px 2px 5px #d0d0d0"),e("messageFontSize","--message-wrapper-message-font-size","14px"),e("messageFontWeight","--message-wrapper-message-font-weight","bold"),e("messageFontFamily","--message-wrapper-message-font-family","'Helvetica', 'Arial', sans-serif"),e("messageTransform","--message-wrapper-message-text-transform","none"),e("messageAlign","--message-wrapper-message-align","center"),e("infoColor","--message-wrapper-info-color","black"),e("successColor","--message-wrapper-success-color","green"),e("errorColor","--message-wrapper-error-color","red"),e("contentHeight","--message-wrapper-content-height","100%"),e("contentWidth","--message-wrapper-content-width","100%"),e("contentZindex","--message-wrapper-content-z-index","1")}render(){return h`
      <div id="outer-wrapper" part="outer-wrapper">
        <div
          id="message-container"
          part="message-container"
          class="${this.visible?"visible":""}"
        >
          <p id="message" part="message" class="${this.type??"info"}">
            ${this.message??"No message"}
          </p>
        </div>

        <slot id="content" part="content"></slot>
      </div>
    `}};b(s,"styles",w`
    :host {
      display: block;
      height: var(--message-wrapper-comp-height, 100%);
      width: var(--message-wrapper-comp-width, 100%);
      max-height: var(--message-wrapper-comp-height, 100%);
      max-width: var(--message-wrapper-comp-width, 100%);
    }

    #outer-wrapper {
      display: block;
      height: var(--message-wrapper-height, 100%);
      width: var(--message-wrapper-width, 100%);
      position: relative;
      overflow-x: var(--message-wrapper-overflow-x, hidden);
      overflow-y: var(--message-wrapper-overflow-y, hidden);
    }

    #message-container {
      opacity: 0;
      display: flex;
      justify-content: var(--message-wrapper-message-align, center);
      align-items: center;
      height: var(--message-wrapper-message-height, fit-content);
      width: var(--message-wrapper-message-width, 250px);
      padding: var(--message-wrapper-message-padding, 15px);
      box-sizing: border-box;
      position: absolute;
      top: var(--message-wrapper-message-top, 20px);
      bottom: var(--message-wrapper-message-bottom, auto);
      left: var(--message-wrapper-message-left, 50%);
      right: var(--message-wrapper-message-right, 50%);
      border-radius: 24px;
      box-shadow: var(--message-wrapper-message-shadow, 0px 2px 5px #d0d0d0);
      background-color: var(--message-wrapper-message-color, #eceff1);
      transition:
        opacity 0.4s ease,
        transform 0.4s ease;
      pointer-events: none;
      transform: translate(-50%);
      z-index: var(--message-wrapper-z-index, 1000000000);
    }

    #message-container.visible {
      opacity: 1;
    }

    #message {
      margin: 0;
      font-size: var(--message-wrapper-message-font-size, 14px);
      font-weight: var(--message-wrapper-message-font-weight, bold);
      font-family: var(
        --message-wrapper-message-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      line-height: var(--message-wrapper-message-line-height, 18px);
      text-shadow: var(
        --message-wrapper-message-text-shadow,
        0px 2px 5px #d0d0d0
      );
      color: black;
      text-transform: var(--message-wrapper-message-text-transform, none);
      cursor: default;
    }

    #message.info {
      color: var(--message-wrapper-info-color, black);
    }

    #message.success {
      color: var(--message-wrapper-success-color, green);
    }

    #message.error {
      color: var(--message-wrapper-error-color, red);
    }

    #content {
      display: block;
      height: var(--message-wrapper-content-height, 100%);
      width: var(--message-wrapper-content-width, 100%);
      position: relative;
      z-index: var(--message-wrapper-content-z-index, 1);
    }
  `);a([o({type:String})],s.prototype,"compHeight",2);a([o({type:String})],s.prototype,"compWidth",2);a([o({type:String})],s.prototype,"compZindex",2);a([o({type:String})],s.prototype,"wrapperHeight",2);a([o({type:String})],s.prototype,"wrapperWidth",2);a([o({type:String})],s.prototype,"wrapperOverflowX",2);a([o({type:String})],s.prototype,"wrapperOverflowY",2);a([o({type:String})],s.prototype,"messageHeight",2);a([o({type:String})],s.prototype,"messageWidth",2);a([o({type:String})],s.prototype,"messageLineHeight",2);a([o({type:String})],s.prototype,"messagePad",2);a([o({type:String})],s.prototype,"messageTop",2);a([o({type:String})],s.prototype,"messageBottom",2);a([o({type:String})],s.prototype,"messageLeft",2);a([o({type:String})],s.prototype,"messageRight",2);a([o({type:String})],s.prototype,"messageColor",2);a([o({type:String})],s.prototype,"messageShadow",2);a([o({type:String})],s.prototype,"messageFontSize",2);a([o({type:String})],s.prototype,"messageFontWeight",2);a([o({type:String})],s.prototype,"messageFontFamily",2);a([o({type:String})],s.prototype,"messageTransform",2);a([o({type:String})],s.prototype,"messageAlign",2);a([o({type:String})],s.prototype,"infoColor",2);a([o({type:String})],s.prototype,"successColor",2);a([o({type:String})],s.prototype,"errorColor",2);a([o({type:String})],s.prototype,"contentHeight",2);a([o({type:String})],s.prototype,"contentWidth",2);a([o({type:String})],s.prototype,"contentZindex",2);a([c()],s.prototype,"type",2);a([c()],s.prototype,"message",2);a([c()],s.prototype,"visible",2);s=a([u("message-wrapper")],s);const F={title:"Components/Utilities/Message Wrapper",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<message-wrapper>`\n\nA global message overlay component. Place once at the root of your app and control visibility via the global `Message` handler.\n\n#### CSS Custom Properties\n\n| Variable                                       | Description                             |\n|------------------------------------------------|-----------------------------------------|\n| `--message-wrapper-comp-height`               | Outer component height                  |\n| `--message-wrapper-comp-width`                | Outer component width                   |\n| `--message-wrapper-z-index`                   | Z-index for the component               |\n| `--message-wrapper-height`                    | Height of outer wrapper                 |\n| `--message-wrapper-width`                     | Width of outer wrapper                  |\n| `--message-wrapper-overflow-x`                | Overflow-x of the wrapper container     |\n| `--message-wrapper-overflow-y`                | Overflow-y of the wrapper container     |\n| `--message-wrapper-message-padding`           | Padding inside the message container    |\n| `--message-wrapper-message-height`            | Height of message container             |\n| `--message-wrapper-message-width`             | Width of message container              |\n| `--message-wrapper-message-line-height`       | Line height of message text             |\n| `--message-wrapper-message-top`               | Top offset                              |\n| `--message-wrapper-message-bottom`            | Bottom offset                           |\n| `--message-wrapper-message-left`              | Left offset                             |\n| `--message-wrapper-message-right`             | Right offset                            |\n| `--message-wrapper-message-color`             | Background color                        |\n| `--message-wrapper-message-shadow`            | Shadow applied to the message box       |\n| `--message-wrapper-message-font-size`         | Font size of message text               |\n| `--message-wrapper-message-font-weight`       | Font weight of message text             |\n| `--message-wrapper-message-font-family`       | Font family of message text             |\n| `--message-wrapper-message-text-transform`    | Text transformation (e.g., uppercase)   |\n| `--message-wrapper-message-align`             | Text alignment                          |\n| `--message-wrapper-info-color`                | Color for informational text            |\n| `--message-wrapper-success-color`             | Color for success text                  |\n| `--message-wrapper-error-color`               | Color for error text                    |\n| `--message-wrapper-content-height`            | Height of the content area              |\n| `--message-wrapper-content-width`             | Width of the content area               |\n| `--message-wrapper-content-z-index`           | Z-index of the content area             |\n\n#### Shadow DOM Parts\n\n| Part Name           | Element             | Description              |\n|---------------------|---------------------|--------------------------|\n| `outer-wrapper`     | Outer container      | Wrapper container        |\n| `message-container` | Message box          | Inner message container  |\n| `message`           | Message text (`<p>`) | The actual message text  |\n| `content`           | Slot content         | Main content area        |\n\n---\n\n### How to Show Messages Globally\n\nUse the global `Message` handler to display messages anywhere in your app:\n\n```ts\n// Show an info message\nMessage.showInfo('Your info message', 3000);\n\n// Show a success message\nMessage.showSuccess('Success!', 3000);\n\n// Show an error message\nMessage.showError('Something went wrong', 3000);\n```\n\nMessage handler function type:\n```ts\nMessage.showFunction(message: string, duration?: number)`\n```\n- `message`: The text to display.\n- `duration` (optional): How long to show the message (in milliseconds, default is 3000).\n\nJust call one of these functions and the message will appear in the overlay.\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{category:"Layout",defaultValue:{summary:"100%"}}},compWidth:{control:"text",description:"Width of the outer component container",table:{category:"Layout",defaultValue:{summary:"100%"}}},compZindex:{control:"text",description:"Z-index for layering control",table:{category:"Layout",defaultValue:{summary:"1000000000"}}},wrapperHeight:{control:"text",description:"Height of the wrapper element",table:{category:"Layout",defaultValue:{summary:"100%"}}},wrapperWidth:{control:"text",description:"Width of the wrapper element",table:{category:"Layout",defaultValue:{summary:"100%"}}},wrapperOverflowX:{control:"text",description:"Overflow-x of the wrapper container",table:{category:"Layout",defaultValue:{summary:"hidden"}}},wrapperOverflowY:{control:"text",description:"Overflow-y of the wrapper container",table:{category:"Layout",defaultValue:{summary:"hidden"}}},messageHeight:{control:"text",description:"Height of the message container",table:{category:"Message",defaultValue:{summary:"fit-content"}}},messageWidth:{control:"text",description:"Width of the message container",table:{category:"Message",defaultValue:{summary:"250px"}}},messageLineHeight:{control:"text",description:"Line height of the message text",table:{category:"Message",defaultValue:{summary:"18px"}}},messagePad:{control:"text",description:"Padding inside the message container",table:{category:"Message",defaultValue:{summary:"15px"}}},messageTop:{control:"text",description:"Top offset for the message box",table:{category:"Message",defaultValue:{summary:"20px"}}},messageBottom:{control:"text",description:"Bottom offset for the message box",table:{category:"Message",defaultValue:{summary:"auto"}}},messageLeft:{control:"text",description:"Left offset for the message box",table:{category:"Message",defaultValue:{summary:"50%"}}},messageRight:{control:"text",description:"Right offset for the message box",table:{category:"Message",defaultValue:{summary:"50%"}}},messageColor:{control:"color",description:"Background color of the message box",table:{category:"Message",defaultValue:{summary:"#eceff1"}}},messageShadow:{control:"text",description:"Box shadow applied to the message container",table:{category:"Message",defaultValue:{summary:"0px 2px 5px #d0d0d0"}}},messageFontSize:{control:"text",description:"Font size of the message text",table:{category:"Message",defaultValue:{summary:"14px"}}},messageFontWeight:{control:"text",description:"Font weight of the message text",table:{category:"Message",defaultValue:{summary:"bold"}}},messageFontFamily:{control:"text",description:"Font family used in the message text",table:{category:"Message",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},messageTransform:{control:"text",description:"Text transformation (e.g., uppercase)",table:{category:"Message",defaultValue:{summary:"none"}}},messageAlign:{control:"text",description:"Text alignment inside the message box",table:{category:"Message",defaultValue:{summary:"center"}}},infoColor:{control:"color",description:"Color used for informational messages",table:{category:"Colors",defaultValue:{summary:"black"}}},successColor:{control:"color",description:"Color used for success messages",table:{category:"Colors",defaultValue:{summary:"green"}}},errorColor:{control:"color",description:"Color used for error messages",table:{category:"Colors",defaultValue:{summary:"red"}}},contentHeight:{control:"text",description:"Height of the content area",table:{category:"Content",defaultValue:{summary:"100%"}}},contentWidth:{control:"text",description:"Width of the content area",table:{category:"Content",defaultValue:{summary:"100%"}}},contentZindex:{control:"text",description:"Z-index of the content area",table:{category:"Content",defaultValue:{summary:"1"}}}}},p=t=>h`
  <div
    style="border: 1px solid #ccc; height: ${t.compHeight}; width: ${t.compWidth}; position: relative;"
  >
    <message-wrapper
      .compHeight=${t.compHeight}
      .compWidth=${t.compWidth}
      .compZindex=${t.compZindex}
      .wrapperHeight=${t.wrapperHeight}
      .wrapperWidth=${t.wrapperWidth}
      .wrapperOverflowX=${t.wrapperOverflowX}
      .wrapperOverflowY=${t.wrapperOverflowY}
      .messageHeight=${t.messageHeight}
      .messageWidth=${t.messageWidth}
      .messageLineHeight=${t.messageLineHeight}
      .messagePad=${t.messagePad}
      .messageTop=${t.messageTop}
      .messageBottom=${t.messageBottom}
      .messageLeft=${t.messageLeft}
      .messageRight=${t.messageRight}
      .messageColor=${t.messageColor}
      .messageShadow=${t.messageShadow}
      .messageFontSize=${t.messageFontSize}
      .messageFontWeight=${t.messageFontWeight}
      .messageFontFamily=${t.messageFontFamily}
      .messageTransform=${t.messageTransform}
      .messageAlign=${t.messageAlign}
      .infoColor=${t.infoColor}
      .successColor=${t.successColor}
      .errorColor=${t.errorColor}
      .contentHeight=${t.contentHeight}
      .contentWidth=${t.contentWidth}
      .contentZindex=${t.contentZindex}
    >
      <div
        style="
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;"
      >
        <content-window compHeight="fit-content" compWidth="fit-content">
          <text-button
            compWidth="200px"
            .handleClick=${()=>l.showInfo("This is info - Long Text Example That Should Wrap If Needed")}
            text="Show Info"
          ></text-button>
          <text-button
            compWidth="200px"
            .handleClick=${()=>l.showSuccess("This is success")}
            text="Show Success"
          ></text-button>
          <text-button
            compWidth="200px"
            .handleClick=${()=>l.showError("This is error")}
            text="Show Error"
          ></text-button>
        </content-window>
      </div>
    </message-wrapper>
  </div>
`;p.args={compHeight:"350px",compWidth:"350px",compZindex:"1000000000",wrapperHeight:"100%",wrapperWidth:"100%",wrapperOverflowX:"hidden",wrapperOverflowY:"hidden",messageHeight:"fit-content",messageWidth:"250px",messageLineHeight:"18px",messagePad:"15px",messageTop:"20px",messageBottom:"auto",messageLeft:"50%",messageRight:"50%",messageColor:"#eceff1",messageShadow:"0px 2px 5px #d0d0d0",messageFontSize:"14px",messageFontWeight:"bold",messageFontFamily:"'Helvetica', 'Arial', sans-serif",messageTransform:"none",messageAlign:"center",infoColor:"black",successColor:"green",errorColor:"red",contentHeight:"100%",contentWidth:"100%",contentZindex:"1"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => html\`
  <div
    style="border: 1px solid #ccc; height: \${args.compHeight}; width: \${args.compWidth}; position: relative;"
  >
    <message-wrapper
      .compHeight=\${args.compHeight}
      .compWidth=\${args.compWidth}
      .compZindex=\${args.compZindex}
      .wrapperHeight=\${args.wrapperHeight}
      .wrapperWidth=\${args.wrapperWidth}
      .wrapperOverflowX=\${args.wrapperOverflowX}
      .wrapperOverflowY=\${args.wrapperOverflowY}
      .messageHeight=\${args.messageHeight}
      .messageWidth=\${args.messageWidth}
      .messageLineHeight=\${args.messageLineHeight}
      .messagePad=\${args.messagePad}
      .messageTop=\${args.messageTop}
      .messageBottom=\${args.messageBottom}
      .messageLeft=\${args.messageLeft}
      .messageRight=\${args.messageRight}
      .messageColor=\${args.messageColor}
      .messageShadow=\${args.messageShadow}
      .messageFontSize=\${args.messageFontSize}
      .messageFontWeight=\${args.messageFontWeight}
      .messageFontFamily=\${args.messageFontFamily}
      .messageTransform=\${args.messageTransform}
      .messageAlign=\${args.messageAlign}
      .infoColor=\${args.infoColor}
      .successColor=\${args.successColor}
      .errorColor=\${args.errorColor}
      .contentHeight=\${args.contentHeight}
      .contentWidth=\${args.contentWidth}
      .contentZindex=\${args.contentZindex}
    >
      <div
        style="
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;"
      >
        <content-window compHeight="fit-content" compWidth="fit-content">
          <text-button
            compWidth="200px"
            .handleClick=\${() => Message.showInfo('This is info - Long Text Example That Should Wrap If Needed')}
            text="Show Info"
          ></text-button>
          <text-button
            compWidth="200px"
            .handleClick=\${() => Message.showSuccess('This is success')}
            text="Show Success"
          ></text-button>
          <text-button
            compWidth="200px"
            .handleClick=\${() => Message.showError('This is error')}
            text="Show Error"
          ></text-button>
        </content-window>
      </div>
    </message-wrapper>
  </div>
\``,...p.parameters?.docs?.source}}};const M=["Default"];export{p as Default,M as __namedExportsOrder,F as default};
