import{i as d,a as h,x as s}from"./iframe-DkD8NZt-.js";import{n as e,t as u}from"./property-rgYTM_nL.js";var b=Object.defineProperty,l=Object.getOwnPropertyDescriptor,y=(i,t,a)=>t in i?b(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a,n=(i,t,a,p)=>{for(var r=p>1?void 0:p?l(t,a):t,c=i.length-1,g;c>=0;c--)(g=i[c])&&(r=(p?g(t,a,r):g(r))||r);return p&&r&&b(t,a,r),r},x=(i,t,a)=>y(i,t+"",a);let o=class extends h{updateStyleVariable(i,t,a){const p=this[i]??a;this.style.setProperty(t,p)}updated(i){const t=(a,p,r)=>i.has(a)&&this.updateStyleVariable(a,p,r);t("compHeight","--icon-button-comp-height","60px"),t("compWidth","--icon-button-comp-width","fit-content"),t("buttonSize","--icon-button-size","100%"),t("buttonBorderRadius","--icon-button-border-radius","24px"),t("buttonColor","--icon-button-bg-color","#eceff1"),t("buttonHoverColor","--icon-button-hover-bg-color","#B0BEC5"),t("buttonActiveColor","--icon-button-active-bg-color","#cfd8dc"),t("buttonShadow","--icon-button-shadow","0px 2px 5px #d0d0d0"),t("iconSize","--icon-button-icon-size","70%"),t("tagLineHeight","--icon-button-tag-line-height","25px"),t("tagPadX","--icon-button-tag-padx","10px"),t("tagWidth","--icon-button-tag-width","272px"),t("tagTextFontSize","--icon-button-tag-font-size","20px"),t("tagTextFontWeight","--icon-button-tag-font-weight","bold"),t("tagTextFontFamily","--icon-button-tag-font-family","'Helvetica', 'Arial', sans-serif"),t("tagTextColor","--icon-button-tag-color","black"),t("tagTextShadow","--icon-button-tag-text-shadow","0px 2px 5px #d0d0d0"),t("tagTextTransform","--icon-button-tag-text-transform","none"),t("tagTextAlign","--icon-button-tag-text-align","center"),t("tagTextDelay","--icon-button-tag-text-delay","0.1s")}render(){const i=this.sizeBy==="width"?"size-by-width":"size-by-height",t=this.showTag?"has-tag":"",a=this.isActive?"active":"";return s`
      <div part="container/tag" class="${t} ${i} ">
        <button
          part="button"
          class="${i} ${a}"
          @click=${this.handleClick}
        >
          ${this.iconSrc?s`<img
                part="icon"
                src="${this.iconSrc}"
                alt="${this.iconAlt??"icon"}"
              />`:""}
        </button>
        ${this.showTag?s`<span part="tag-text">${this.tagText??""}</span>`:""}
      </div>
    `}};x(o,"styles",d`
    :host {
      display: inline-block;
      height: var(--icon-button-comp-height, 60px);
      width: var(--icon-button-comp-width, fit-content);
      max-height: var(--icon-button-comp-height, 60px);
      max-width: var(--icon-button-comp-width, fit-content);
    }

    div {
      display: flex;
      align-items: center;
      aspect-ratio: 1 / 1;
      border: none;
      box-shadow: var(--icon-button-shadow, 0px 2px 5px #d0d0d0);
      border-radius: var(--icon-button-border-radius, 24px);
      background-color: var(--icon-button-bg-color, #eceff1);
      transition: width 0.5s ease;
      overflow: hidden;
    }

    div.size-by-height {
      height: var(--icon-button-size, 100%);
      max-height: var(--icon-button-size, 100%);
    }

    div.size-by-width {
      width: var(--icon-button-size, 100%);
    }

    div.has-tag:has(button:not(.active):hover) {
      aspect-ratio: none;
      width: var(--icon-button-tag-width, 272px);
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      aspect-ratio: 1 / 1;
      padding: 0;
      border: none;
      border-radius: var(--icon-button-border-radius, 24px);
      background-color: var(--icon-button-bg-color, #eceff1);
      transition: background-color 0.3s;
      cursor: pointer;
    }

    button.active {
      background-color: var(--icon-button-active-bg-color, #cfd8dc);
    }

    button.size-by-height {
      height: 100%;
    }

    button.size-by-width {
      width: 100%;
    }

    button:hover {
      background-color: var(--icon-button-hover-bg-color, #b0bec5);
    }

    img {
      height: var(--icon-button-icon-size, 70%);
      aspect-ratio: 1 / 1;
    }

    span {
      display: flex;
      justify-content: center;
      line-height: var(--icon-button-tag-line-height, 25px);
      align-items: center;
      overflow: hidden;
      box-sizing: border-box;
      opacity: 0;
      height: 100%;
      width: var(--icon-button-tag-width, 272px);
      padding-left: var(--icon-button-tag-padx, 10px);
      padding-right: var(--icon-button-tag-padx, 10px);
      pointer-events: none;
      text-align: var(--icon-button-tag-text-align, center);
      font-size: var(--icon-button-tag-font-size, 20px);
      font-weight: var(--icon-button-tag-font-weight, bold);
      font-family: var(
        --icon-button-tag-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      text-shadow: var(--icon-button-tag-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--icon-button-tag-color, black);
      text-transform: var(--icon-button-tag-text-transform, none);
    }

    button:not(.active):hover + span {
      opacity: 1;
      transition: opacity 0.3s ease;
      transition-delay: var(--icon-button-tag-text-delay, 0.1s);
      pointer-events: none;
    }
  `);n([e({type:String})],o.prototype,"compHeight",2);n([e({type:String})],o.prototype,"compWidth",2);n([e({type:String})],o.prototype,"buttonSize",2);n([e({type:String})],o.prototype,"sizeBy",2);n([e({type:String})],o.prototype,"buttonBorderRadius",2);n([e({type:String})],o.prototype,"buttonColor",2);n([e({type:String})],o.prototype,"buttonHoverColor",2);n([e({type:String})],o.prototype,"buttonActiveColor",2);n([e({type:String})],o.prototype,"buttonShadow",2);n([e({type:String})],o.prototype,"iconSize",2);n([e({type:Function})],o.prototype,"handleClick",2);n([e({type:String})],o.prototype,"iconSrc",2);n([e({type:String})],o.prototype,"iconAlt",2);n([e({type:Boolean})],o.prototype,"showTag",2);n([e({type:String})],o.prototype,"tagText",2);n([e({type:String})],o.prototype,"tagWidth",2);n([e({type:String})],o.prototype,"tagPadX",2);n([e({type:String})],o.prototype,"tagLineHeight",2);n([e({type:String})],o.prototype,"tagTextFontSize",2);n([e({type:String})],o.prototype,"tagTextFontWeight",2);n([e({type:String})],o.prototype,"tagTextFontFamily",2);n([e({type:String})],o.prototype,"tagTextColor",2);n([e({type:String})],o.prototype,"tagTextShadow",2);n([e({type:String})],o.prototype,"tagTextTransform",2);n([e({type:String})],o.prototype,"tagTextAlign",2);n([e({type:String})],o.prototype,"tagTextDelay",2);n([e({type:Boolean})],o.prototype,"isActive",2);o=n([u("icon-button")],o);
