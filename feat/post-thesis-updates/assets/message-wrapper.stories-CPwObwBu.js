import{i as u,a as f,x as c}from"./iframe-BLwnf0Qk.js";import{n as a,t as w}from"./property-Dgah4u3S.js";import{r as p}from"./state-ze8viTcc.js";import"./content-window-CE9huSAe.js";import"./text-button-CQxMRunF.js";var d=Object.defineProperty,y=Object.getOwnPropertyDescriptor,x=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t,r,i)=>{for(var n=i>1?void 0:i?y(t,r):t,m=e.length-1,l;m>=0;m--)(l=e[m])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&d(t,r,n),n},b=(e,t,r)=>x(e,t+"",r);class v{instance=null;findGlobalMessage(){if(this.instance)return this.instance;let t=document.querySelector("message-wrapper");return t?(this.instance=t,t):null}showSuccess(t,r=3e3,i=1e3){const n=this.findGlobalMessage();n&&n.show("success",t,r,i)}showError(t,r=3e3,i=3e3){const n=this.findGlobalMessage();n&&n.show("error",t,r,i)}showInfo(t,r=3e3,i=1e3){const n=this.findGlobalMessage();n&&n.show("info",t,r,i)}}const h=new v;let s=class extends f{queue=[];timeoutId=null;makeNotNeg(e){return e<0?0:e}cutQueue(e){let t=this.queue.length-e,r=0;for(;t>0&&this.queue.length>0&&r<this.queue.length;)this.queue[r].type!="error"?this.queue.shift():r+=1;for(;this.queue.length>e;)this.queue.shift()}show(e,t,r=3e3,i){this.queue.push({type:e,message:t,duration:r,floodedDuration:i});const n=this.maxQueueSize&&this.maxQueueSize>0?this.maxQueueSize:10;this.queue.length>n&&this.cutQueue(n),!this.visible&&this.type===void 0&&this.processQueue()}isFlood(){const e=this.makeNotNeg(this.floodedQueueLength??3);return this.flood||this.queue.length>=e}processQueue(){if(this.queue.length===0){this.flood=!1;return}const e=this.queue.shift();if(!e){this.flood=!1;return}this.type=e.type,this.message=e.message,this.visible=!0,this.flood=this.isFlood();const t=this.makeNotNeg(e.duration),r=this.makeNotNeg(e.floodedDuration),i=this.flood?Math.min(t,r):t,n=this.flood?200:400;this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.hideMessage(n)},i)}hideMessage(e=400){this.visible=!1,this.type=void 0,setTimeout(()=>{this.processQueue()},e)}updateStyleVariable(e,t,r){const i=this[e]??r;this.style.setProperty(t,i)}updated(e){const t=(r,i,n)=>e.has(r)&&this.updateStyleVariable(r,i,n);t("compHeight","--message-wrapper-comp-height","100%"),t("compWidth","--message-wrapper-comp-width","100%"),t("compZindex","--message-wrapper-z-index","1000000000"),t("wrapperHeight","--message-wrapper-height","100%"),t("wrapperWidth","--message-wrapper-width","100%"),t("wrapperOverflowX","--message-wrapper-overflow-x","hidden"),t("wrapperOverflowY","--message-wrapper-overflow-y","hidden"),t("messageHeight","--message-wrapper-message-height","fit-content"),t("messageWidth","--message-wrapper-message-width","250px"),t("messageLineHeight","--message-wrapper-message-line-height","18px"),t("messagePad","--message-wrapper-message-padding","15px"),t("messageTop","--message-wrapper-message-top","20px"),t("messageBottom","--message-wrapper-message-bottom","auto"),t("messageLeft","--message-wrapper-message-left","50%"),t("messageRight","--message-wrapper-message-right","50%"),t("messageColor","--message-wrapper-message-color","#eceff1"),t("messageShadow","--message-wrapper-message-shadow","0px 2px 5px #d0d0d0"),t("messageFontSize","--message-wrapper-message-font-size","14px"),t("messageFontWeight","--message-wrapper-message-font-weight","bold"),t("messageFontFamily","--message-wrapper-message-font-family","'Helvetica', 'Arial', sans-serif"),t("messageTransform","--message-wrapper-message-text-transform","none"),t("messageAlign","--message-wrapper-message-align","center"),t("infoColor","--message-wrapper-info-color","black"),t("successColor","--message-wrapper-success-color","green"),t("errorColor","--message-wrapper-error-color","red"),t("contentHeight","--message-wrapper-content-height","100%"),t("contentWidth","--message-wrapper-content-width","100%"),t("contentZindex","--message-wrapper-content-z-index","1")}render(){return c`
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
    `}};b(s,"styles",u`
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
  `);o([a({type:String})],s.prototype,"compHeight",2);o([a({type:String})],s.prototype,"compWidth",2);o([a({type:String})],s.prototype,"compZindex",2);o([a({type:String})],s.prototype,"wrapperHeight",2);o([a({type:String})],s.prototype,"wrapperWidth",2);o([a({type:String})],s.prototype,"wrapperOverflowX",2);o([a({type:String})],s.prototype,"wrapperOverflowY",2);o([a({type:String})],s.prototype,"messageHeight",2);o([a({type:String})],s.prototype,"messageWidth",2);o([a({type:String})],s.prototype,"messageLineHeight",2);o([a({type:String})],s.prototype,"messagePad",2);o([a({type:String})],s.prototype,"messageTop",2);o([a({type:String})],s.prototype,"messageBottom",2);o([a({type:String})],s.prototype,"messageLeft",2);o([a({type:String})],s.prototype,"messageRight",2);o([a({type:String})],s.prototype,"messageColor",2);o([a({type:String})],s.prototype,"messageShadow",2);o([a({type:String})],s.prototype,"messageFontSize",2);o([a({type:String})],s.prototype,"messageFontWeight",2);o([a({type:String})],s.prototype,"messageFontFamily",2);o([a({type:String})],s.prototype,"messageTransform",2);o([a({type:String})],s.prototype,"messageAlign",2);o([a({type:String})],s.prototype,"infoColor",2);o([a({type:String})],s.prototype,"successColor",2);o([a({type:String})],s.prototype,"errorColor",2);o([a({type:String})],s.prototype,"contentHeight",2);o([a({type:String})],s.prototype,"contentWidth",2);o([a({type:String})],s.prototype,"contentZindex",2);o([a({type:Number})],s.prototype,"floodedQueueLength",2);o([a({type:Number})],s.prototype,"maxQueueSize",2);o([p()],s.prototype,"type",2);o([p()],s.prototype,"message",2);o([p()],s.prototype,"visible",2);o([p()],s.prototype,"flood",2);s=o([w("message-wrapper")],s);const M={title:"Components/Utilities/Message Wrapper",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<message-wrapper>`\n\nA global message overlay component. Place once at the root of your app and control visibility via the global `Message` handler.\n\n#### CSS Custom Properties\n\n| Variable                                       | Description                             |\n|------------------------------------------------|-----------------------------------------|\n| `--message-wrapper-comp-height`               | Outer component height                  |\n| `--message-wrapper-comp-width`                | Outer component width                   |\n| `--message-wrapper-z-index`                   | Z-index for the component               |\n| `--message-wrapper-height`                    | Height of outer wrapper                 |\n| `--message-wrapper-width`                     | Width of outer wrapper                  |\n| `--message-wrapper-overflow-x`                | Overflow-x of the wrapper container     |\n| `--message-wrapper-overflow-y`                | Overflow-y of the wrapper container     |\n| `--message-wrapper-message-padding`           | Padding inside the message container    |\n| `--message-wrapper-message-height`            | Height of message container             |\n| `--message-wrapper-message-width`             | Width of message container              |\n| `--message-wrapper-message-line-height`       | Line height of message text             |\n| `--message-wrapper-message-top`               | Top offset                              |\n| `--message-wrapper-message-bottom`            | Bottom offset                           |\n| `--message-wrapper-message-left`              | Left offset                             |\n| `--message-wrapper-message-right`             | Right offset                            |\n| `--message-wrapper-message-color`             | Background color                        |\n| `--message-wrapper-message-shadow`            | Shadow applied to the message box       |\n| `--message-wrapper-message-font-size`         | Font size of message text               |\n| `--message-wrapper-message-font-weight`       | Font weight of message text             |\n| `--message-wrapper-message-font-family`       | Font family of message text             |\n| `--message-wrapper-message-text-transform`    | Text transformation (e.g., uppercase)   |\n| `--message-wrapper-message-align`             | Text alignment                          |\n| `--message-wrapper-info-color`                | Color for informational text            |\n| `--message-wrapper-success-color`             | Color for success text                  |\n| `--message-wrapper-error-color`               | Color for error text                    |\n| `--message-wrapper-content-height`            | Height of the content area              |\n| `--message-wrapper-content-width`             | Width of the content area               |\n| `--message-wrapper-content-z-index`           | Z-index of the content area             |\n\n#### Shadow DOM Parts\n\n| Part Name           | Element             | Description              |\n|---------------------|---------------------|--------------------------|\n| `outer-wrapper`     | Outer container      | Wrapper container        |\n| `message-container` | Message box          | Inner message container  |\n| `message`           | Message text (`<p>`) | The actual message text  |\n| `content`           | Slot content         | Main content area        |\n\n---\n\n### How to Show Messages Globally\n\nUse the global `Message` handler to display messages anywhere in your app:\n\n```ts\n// Show an info message\nMessage.showInfo('Your info message');\n\n// Show an info message with a custom duration of 5 seconds\nMessage.showInfo('Your info message', 5000);\n\n// Show an info message with a duration of 5 seconds and flooding duration of 2 seconds\nMessage.showInfo('Your info message', 5000, 2000);\n\n// Show a success message\nMessage.showSuccess('Success!');\n\n// Show a success message with a duration of 2 seconds\nMessage.showSuccess('Success!', 2000);\n\n// Show an error message\nMessage.showError('Something went wrong');\n\n// Show an error message with both duration and flooding duration of 5 seconds\nMessage.showError('Something went wrong', 5000, 5000);\n```\n\nMessage handler function type:\n```ts\nMessage.showFunction(message: string, duration?: number, floodedDuration?: number)`\n```\n- `message`: The text to display.\n- `duration` (optional): How long to show the message (in milliseconds, default is 3000).\n- `floodedDuration` (optional): How long to show the message if message queue exceeds the flooded limit (in milliseconds, default is 1000 for info and success messages, 3000 for errors).\n\nJust call one of these functions and the message will appear in the overlay.\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{category:"Layout",defaultValue:{summary:"100%"}}},compWidth:{control:"text",description:"Width of the outer component container",table:{category:"Layout",defaultValue:{summary:"100%"}}},compZindex:{control:"text",description:"Z-index for layering control",table:{category:"Layout",defaultValue:{summary:"1000000000"}}},wrapperHeight:{control:"text",description:"Height of the wrapper element",table:{category:"Layout",defaultValue:{summary:"100%"}}},wrapperWidth:{control:"text",description:"Width of the wrapper element",table:{category:"Layout",defaultValue:{summary:"100%"}}},wrapperOverflowX:{control:"text",description:"Overflow-x of the wrapper container",table:{category:"Layout",defaultValue:{summary:"hidden"}}},wrapperOverflowY:{control:"text",description:"Overflow-y of the wrapper container",table:{category:"Layout",defaultValue:{summary:"hidden"}}},messageHeight:{control:"text",description:"Height of the message container",table:{category:"Message",defaultValue:{summary:"fit-content"}}},messageWidth:{control:"text",description:"Width of the message container",table:{category:"Message",defaultValue:{summary:"250px"}}},messageLineHeight:{control:"text",description:"Line height of the message text",table:{category:"Message",defaultValue:{summary:"18px"}}},messagePad:{control:"text",description:"Padding inside the message container",table:{category:"Message",defaultValue:{summary:"15px"}}},messageTop:{control:"text",description:"Top offset for the message box",table:{category:"Message",defaultValue:{summary:"20px"}}},messageBottom:{control:"text",description:"Bottom offset for the message box",table:{category:"Message",defaultValue:{summary:"auto"}}},messageLeft:{control:"text",description:"Left offset for the message box",table:{category:"Message",defaultValue:{summary:"50%"}}},messageRight:{control:"text",description:"Right offset for the message box",table:{category:"Message",defaultValue:{summary:"50%"}}},messageColor:{control:"color",description:"Background color of the message box",table:{category:"Message",defaultValue:{summary:"#eceff1"}}},messageShadow:{control:"text",description:"Box shadow applied to the message container",table:{category:"Message",defaultValue:{summary:"0px 2px 5px #d0d0d0"}}},messageFontSize:{control:"text",description:"Font size of the message text",table:{category:"Message",defaultValue:{summary:"14px"}}},messageFontWeight:{control:"text",description:"Font weight of the message text",table:{category:"Message",defaultValue:{summary:"bold"}}},messageFontFamily:{control:"text",description:"Font family used in the message text",table:{category:"Message",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},messageTransform:{control:"text",description:"Text transformation (e.g., uppercase)",table:{category:"Message",defaultValue:{summary:"none"}}},messageAlign:{control:"text",description:"Text alignment inside the message box",table:{category:"Message",defaultValue:{summary:"center"}}},infoColor:{control:"color",description:"Color used for informational messages",table:{category:"Colors",defaultValue:{summary:"black"}}},successColor:{control:"color",description:"Color used for success messages",table:{category:"Colors",defaultValue:{summary:"green"}}},errorColor:{control:"color",description:"Color used for error messages",table:{category:"Colors",defaultValue:{summary:"red"}}},contentHeight:{control:"text",description:"Height of the content area",table:{category:"Content",defaultValue:{summary:"100%"}}},contentWidth:{control:"text",description:"Width of the content area",table:{category:"Content",defaultValue:{summary:"100%"}}},contentZindex:{control:"text",description:"Z-index of the content area",table:{category:"Content",defaultValue:{summary:"1"}}},floodedQueueLength:{control:"number",description:`Queue length at which messages switch to "flooded" display duration.

When the number of pending messages in the queue reaches or exceeds this value, the component enters "flooded" mode. In this mode each message is shown for the shorter of its normal duration and its floodedDuration, and the gap between messages is reduced from 400ms to 200ms. This is designed for bursts of rapid notifications (e.g. multiple errors fired at once) so the queue drains quickly and messages don't pile up.

Set to 0 to effectively always flood, or a very high value to effectively never flood.`,table:{category:"Message Queue",defaultValue:{summary:"3"}}},maxQueueSize:{control:"number",description:`Maximum number of queued messages; excess messages are trimmed (errors are kept first).

This caps how many messages can wait in the queue before new ones are discarded. When the queue exceeds this size, non-error messages are dropped first, oldest first, so that newer messages can still be shown. Only if the queue is still over the limit are error messages dropped. This prevents a runaway flood of notifications from overwhelming the UI.

Default is 10.`,table:{category:"Message Queue",defaultValue:{summary:"10"}}}}},g=e=>c`
  <div
    style="border: 1px solid #ccc; height: ${e.compHeight}; width: ${e.compWidth}; position: relative;"
  >
    <message-wrapper
      .compHeight=${e.compHeight}
      .compWidth=${e.compWidth}
      .compZindex=${e.compZindex}
      .wrapperHeight=${e.wrapperHeight}
      .wrapperWidth=${e.wrapperWidth}
      .wrapperOverflowX=${e.wrapperOverflowX}
      .wrapperOverflowY=${e.wrapperOverflowY}
      .messageHeight=${e.messageHeight}
      .messageWidth=${e.messageWidth}
      .messageLineHeight=${e.messageLineHeight}
      .messagePad=${e.messagePad}
      .messageTop=${e.messageTop}
      .messageBottom=${e.messageBottom}
      .messageLeft=${e.messageLeft}
      .messageRight=${e.messageRight}
      .messageColor=${e.messageColor}
      .messageShadow=${e.messageShadow}
      .messageFontSize=${e.messageFontSize}
      .messageFontWeight=${e.messageFontWeight}
      .messageFontFamily=${e.messageFontFamily}
      .messageTransform=${e.messageTransform}
      .messageAlign=${e.messageAlign}
      .infoColor=${e.infoColor}
      .successColor=${e.successColor}
      .errorColor=${e.errorColor}
      .contentHeight=${e.contentHeight}
      .contentWidth=${e.contentWidth}
      .contentZindex=${e.contentZindex}
      .floodedQueueLength=${e.floodedQueueLength}
      .maxQueueSize=${e.maxQueueSize}
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
            .handleClick=${()=>h.showInfo("This is info - Long Text Example That Should Wrap If Needed")}
            text="Show Info"
          ></text-button>
          <text-button
            compWidth="200px"
            .handleClick=${()=>h.showSuccess("This is success")}
            text="Show Success"
          ></text-button>
          <text-button
            compWidth="200px"
            .handleClick=${()=>h.showError("This is error")}
            text="Show Error"
          ></text-button>
        </content-window>
      </div>
    </message-wrapper>
  </div>
`;g.args={compHeight:"350px",compWidth:"350px",compZindex:"1000000000",wrapperHeight:"100%",wrapperWidth:"100%",wrapperOverflowX:"hidden",wrapperOverflowY:"hidden",messageHeight:"fit-content",messageWidth:"250px",messageLineHeight:"18px",messagePad:"15px",messageTop:"20px",messageBottom:"auto",messageLeft:"50%",messageRight:"50%",messageColor:"#eceff1",messageShadow:"0px 2px 5px #d0d0d0",messageFontSize:"14px",messageFontWeight:"bold",messageFontFamily:"'Helvetica', 'Arial', sans-serif",messageTransform:"none",messageAlign:"center",infoColor:"black",successColor:"green",errorColor:"red",contentHeight:"100%",contentWidth:"100%",contentZindex:"1",floodedQueueLength:3,maxQueueSize:10};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => html\`
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
      .floodedQueueLength=\${args.floodedQueueLength}
      .maxQueueSize=\${args.maxQueueSize}
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
\``,...g.parameters?.docs?.source}}};const F=["Default"];export{g as Default,F as __namedExportsOrder,M as default};
