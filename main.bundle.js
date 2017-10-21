webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__ = __webpack_require__("../../../../../src/app/services/chat-room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__ = __webpack_require__("../../../../../src/app/services/send-bird.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routing_app_routing_module__ = __webpack_require__("../../../../../src/app/routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chat_room_chat_room_component__ = __webpack_require__("../../../../../src/app/components/chat-room/chat-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chat_room_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/components/chat-room/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chat_room_chat_roll_chat_roll_component__ = __webpack_require__("../../../../../src/app/components/chat-room/chat-roll/chat-roll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_chat_room_chat_tab_select_chat_tab_select_component__ = __webpack_require__("../../../../../src/app/components/chat-room/chat-tab-select/chat-tab-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_scrollable_directive__ = __webpack_require__("../../../../../src/app/directives/scrollable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_chat_room_chat_roll_chat_roll_message_chat_roll_message_component__ = __webpack_require__("../../../../../src/app/components/chat-room/chat-roll/chat-roll-message/chat-roll-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_chat_room_chat_room_component__["a" /* ChatRoomComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_chat_room_user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_chat_room_chat_roll_chat_roll_component__["a" /* ChatRollComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_chat_room_chat_tab_select_chat_tab_select_component__["a" /* ChatTabSelectComponent */],
            __WEBPACK_IMPORTED_MODULE_13__directives_scrollable_directive__["a" /* ScrollableDirective */],
            __WEBPACK_IMPORTED_MODULE_14__components_chat_room_chat_roll_chat_roll_message_chat_roll_message_component__["a" /* ChatRollMessageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__["a" /* SendBirdService */], __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__["a" /* ChatRoomService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-roll/chat-roll-message/chat-roll-message.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list-item dense [ngClass]=\"{self: isOwnMessage}\">\n  <img matListAvatar [src]=\"message._sender.profileUrl\" (click)=\"createDM()\">\n  <h3 matLine> {{message._sender.userId}} </h3>\n  <p matLine> {{message.message}} </p>\n\n</mat-list-item>\n\n<mat-card matLine *ngIf=\"ytEmbed\" class=\"ytEmbed\"  [ngClass]=\"{self: isOwnMessage}\">\n  <mat-card-title>{{ytEmbed.title}}</mat-card-title>\n  <mat-card-subtitle>{{ytEmbed.author_name}}</mat-card-subtitle>\n  <mat-card-content [innerHTML]=\"ytEmbed.html\">\n\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-roll/chat-roll-message/chat-roll-message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ytEmbed {\n  margin: 24px;\n  width: 500px; }\n  .ytEmbed.self {\n    margin-left: auto; }\n\n.mat-list-item.self {\n  text-align: right; }\n  .mat-list-item.self ::ng-deep .mat-list-item-content {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n\n.mat-list-item .mat-list-avatar {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-roll/chat-roll-message/chat-roll-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRollMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__ = __webpack_require__("../../../../../src/app/services/chat-room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__ = __webpack_require__("../../../../../src/app/services/send-bird.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatRollMessageComponent = (function () {
    function ChatRollMessageComponent(sb, croom, http, sanitizer) {
        this.sb = sb;
        this.croom = croom;
        this.http = http;
        this.sanitizer = sanitizer;
        this.ytEmbed = null;
    }
    Object.defineProperty(ChatRollMessageComponent.prototype, "isOwnMessage", {
        /** if this message was sent by ourself */
        get: function () { return this.sb.isCurrentUser(this.message._sender.userId); },
        enumerable: true,
        configurable: true
    });
    ChatRollMessageComponent.prototype.ngOnInit = function () {
        this.checkForYoutube();
    };
    ChatRollMessageComponent.prototype.createDM = function () {
        if (!this.isOwnMessage)
            this.croom.createDmWith(this.message._sender);
    };
    ChatRollMessageComponent.prototype.checkForYoutube = function () {
        var _this = this;
        var regex = new RegExp(/youtube\.com\/watch.*v=([^&/ ]*)|youtu.be\/([^&/ ]*)/);
        var match = regex.exec(this.message.message);
        if (match) {
            this.http.get("https://www.youtube.com/oembed?url=" + match[0] + "&format=json").subscribe(function (data) {
                if (data) {
                    _this.ytEmbed = data;
                    _this.ytEmbed.html = _this.sanitizer.bypassSecurityTrustHtml(data.html);
                }
            });
        }
    };
    return ChatRollMessageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ChatRollMessageComponent.prototype, "message", void 0);
ChatRollMessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'tafullstack-chat-roll-message',
        template: __webpack_require__("../../../../../src/app/components/chat-room/chat-roll/chat-roll-message/chat-roll-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat-room/chat-roll/chat-roll-message/chat-roll-message.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__["a" /* SendBirdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__["a" /* SendBirdService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__["a" /* ChatRoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__["a" /* ChatRoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], ChatRollMessageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chat-roll-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-roll/chat-roll.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-wrapper\" fxLayout=\"column\">\n\n  <div class=\"fetching\" *ngIf=\"_queryingMessageList\">\n    <p> Fetching more messages ...</p>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <div class=\"text-messages\" tafullstackScrollable fxFlex=\"100\">\n    <mat-list>\n      <tafullstack-chat-roll-message *ngFor=\"let message of messages\" [message]=\"message\"> </tafullstack-chat-roll-message>\n    </mat-list>\n\n    <div class=\"no-message\" *ngIf=\"messages.length == 0 && !_queryingMessageList\">\n      <h2>Oh no! It seems there isn't any messages yet...</h2>\n      <p> Feel free to add the first one ;) </p>\n    </div>\n\n  </div>\n\n\n  <div fxLayout class=\"actions\" fxFlex=\"64px\">\n    <mat-form-field fxFlex=\"100\" class=\"full-width\" [floatPlaceholder]=\"'never'\">\n      <input matInput placeholder=\"Type your message\" [(ngModel)]=\"newMsgText\">\n    </mat-form-field>\n\n    <button mat-button color=\"primary\" (click)=\"sendMessage()\">Send!</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-roll/chat-roll.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: calc(100% - 48px);\n  min-height: calc(100% - 48px);\n  max-height: calc(100% - 48px); }\n  .chat-wrapper .text-messages {\n    overflow-y: scroll; }\n  .chat-wrapper .no-message {\n    text-align: center;\n    font-family: \"Verdana\"; }\n    .chat-wrapper .no-message h2 {\n      font-size: 2em;\n      margin-bottom: 0px; }\n\n.fetching p {\n  margin: 0px;\n  padding: 8px 0px;\n  text-align: center;\n  background: white;\n  font-family: \"Roboto\"; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-roll/chat-roll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__ = __webpack_require__("../../../../../src/app/services/chat-room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__ = __webpack_require__("../../../../../src/app/services/send-bird.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_scrollable_directive__ = __webpack_require__("../../../../../src/app/directives/scrollable.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatRollComponent = (function () {
    function ChatRollComponent(sb, croom) {
        var _this = this;
        this.sb = sb;
        this.croom = croom;
        /** channel currently being displayed */
        this.currentChannel = null;
        this._channelHandler = new this.sb.sb.ChannelHandler();
        /** if we're currently querying for more messages  */
        this._queryingMessageList = false;
        /** display messages */
        this.messages = [];
        /** message currently being typed */
        this.newMsgText = "";
        /**
         * Callback on new message
         * @param channel
         * @param message
         */
        this.onMessageReceived = function (channel, message) {
            if (_this.isCurrentChannel(channel)) {
                _this.messages.push(message);
                _this._scrollable.scrollToBottomIfNotUp();
            }
        };
        this._channelHandler.onMessageReceived = this.onMessageReceived;
    }
    ChatRollComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._scrollable.onTop.subscribe(function (event) {
            _this.fetchMessagesOfChannel();
        });
    };
    ChatRollComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sb.sb.addChannelHandler("chat-roll-handler", this._channelHandler);
        this.croom.currentChannel.subscribe(function (currentChannel) {
            if (currentChannel) {
                _this.resetToChannel(currentChannel);
                _this.fetchMessagesOfChannel();
                _this._scrollable.forceBottom();
            }
        });
    };
    ChatRollComponent.prototype.ngOnDestroy = function () {
        this.sb.sb.removeChannelHandler("chat-roll-handler");
    };
    /**
     * Check if the given channel is the one currently being displayed
     * @param channel
     */
    ChatRollComponent.prototype.isCurrentChannel = function (channel) {
        return channel.url === this.currentChannel.url;
    };
    /**
     * Resets the state for this channel
     * @param channel the channel to reset everything for
     */
    ChatRollComponent.prototype.resetToChannel = function (channel) {
        this.currentChannel = channel;
        this._messageListQuery = channel.createPreviousMessageListQuery();
        this.messages = [];
    };
    /**
     * Fetch 25 more messages in this channel with each call
     */
    ChatRollComponent.prototype.fetchMessagesOfChannel = function () {
        var _this = this;
        // Ensure we're not already querying 
        if (!this._queryingMessageList && this._messageListQuery.hasMore) {
            // We're now querying
            this._queryingMessageList = true;
            // Get 25 latest message we don't already have
            this._messageListQuery.load(25, false, function (messages, error) {
                _this._queryingMessageList = false;
                if (error)
                    return;
                // Push them into the display array
                _this.messages = messages.concat(_this.messages);
                _this._scrollable.scrollToBottomIfNotUp();
            });
        }
    };
    /**
     * Sends the current typing message to the current channel
     */
    ChatRollComponent.prototype.sendMessage = function () {
        var _this = this;
        if (this.newMsgText)
            this.currentChannel.sendUserMessage(this.newMsgText, function (message, error) {
                _this.newMsgText = "";
                _this.messages.push(message);
                _this._scrollable.scrollToBottomIfNotUp();
            });
    };
    return ChatRollComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_17" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__directives_scrollable_directive__["a" /* ScrollableDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__directives_scrollable_directive__["a" /* ScrollableDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__directives_scrollable_directive__["a" /* ScrollableDirective */]) === "function" && _a || Object)
], ChatRollComponent.prototype, "_scrollable", void 0);
ChatRollComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'tafullstack-chat-roll',
        template: __webpack_require__("../../../../../src/app/components/chat-room/chat-roll/chat-roll.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat-room/chat-roll/chat-roll.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__["a" /* SendBirdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__["a" /* SendBirdService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__["a" /* ChatRoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__["a" /* ChatRoomService */]) === "function" && _c || Object])
], ChatRollComponent);

var _a, _b, _c;
//# sourceMappingURL=chat-roll.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-room.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout fxLayoutWrap>\n  <div class=\"chat-box\" fxLayout fxLayoutWrap>\n    <div class=\"left\" fxFlex.lt-md=\"100\" fxFlex.gt-md=\"85\" fxLayout=\"column\">\n      <tafullstack-chat-tab-select fxFlex></tafullstack-chat-tab-select>\n      <tafullstack-chat-roll fxFlex=\"100\"></tafullstack-chat-roll>\n    </div>\n    <tafullstack-user-list fxFlex.lt-md=\"100\" fxFlex.gt-md=\"15\"></tafullstack-user-list>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-room.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  height: 100vh; }\n  .container .chat-box {\n    margin: auto;\n    height: 90vh;\n    width: 90vw; }\n    .container .chat-box .left {\n      height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatRoomComponent = (function () {
    function ChatRoomComponent() {
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
    };
    return ChatRoomComponent;
}());
ChatRoomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tafullstack-chat-room',
        template: __webpack_require__("../../../../../src/app/components/chat-room/chat-room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat-room/chat-room.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ChatRoomComponent);

//# sourceMappingURL=chat-room.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-tab-select/chat-tab-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"relative\">\n  <nav mat-tab-nav-bar>\n    <a mat-tab-link *ngIf=\"currentChannel?.isGroupChannel()\" active=\"true\" class=\"private\">Private convo</a>\n    <a mat-tab-link [active]=\"isSelected(channel)\" *ngFor=\"let channel of channelList\" (click)=\"navigateToChannel(channel)\">\n      {{channel.name}}\n    </a>\n\n    <a mat-tab-link (click)=\"createChannel()\">\n      <mat-icon>add</mat-icon>\n      Create a channel\n    </a>\n  </nav>\n\n  <mat-card *ngIf=\"createMode\">\n    <mat-card-title>Create a new channel</mat-card-title>\n    <mat-card-subtitle>Just enter your channel name and tab the button, as easy as that.</mat-card-subtitle>\n\n    <mat-card-content>\n      <mat-form-field>\n        <input matInput placeholder=\"An amazing channel name\" [formControl]=\"channelCreate\">\n        <mat-error *ngIf=\"channelCreate.hasError('required')\">\n          Channel name is required\n        </mat-error>\n        <mat-error *ngIf=\"channelCreate.hasError('minlength')\">\n          Channel name needs to be at least 3 chars.\n        </mat-error>\n        <mat-error *ngIf=\"channelCreate.hasError('maxlength')\">\n          Channel name needs to be at most 20 chars.\n        </mat-error>\n      </mat-form-field>\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button mat-button (click)=\"cancelCreation()\">Cancel</button>\n      <button mat-raised-button color=\"primary\" [disabled]=\"!channelCreate.valid\" (click)=\"submitNewChannel()\">Create my channel !</button>\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-tab-select/chat-tab-select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".relative {\n  position: relative; }\n  .relative .mat-card {\n    position: absolute;\n    min-width: 66%;\n    right: 0px; }\n\n.mat-tab-link.private {\n  background: rgba(0, 0, 0, 0.2);\n  color: #1d1d1d;\n  font-weight: bolder; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-room/chat-tab-select/chat-tab-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatTabSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_room_service__ = __webpack_require__("../../../../../src/app/services/chat-room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_send_bird_service__ = __webpack_require__("../../../../../src/app/services/send-bird.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component handling the currently available chat-rooms, switching from one to the other
 * and creating new ones
 */
var ChatTabSelectComponent = (function () {
    function ChatTabSelectComponent(sb, croom) {
        this.sb = sb;
        this.croom = croom;
        this.createMode = false;
    }
    Object.defineProperty(ChatTabSelectComponent.prototype, "currentChannel", {
        get: function () { return this.croom.currentChannel.getValue(); },
        enumerable: true,
        configurable: true
    });
    ChatTabSelectComponent.prototype.ngOnInit = function () {
        this.getAccessibleChats();
    };
    ChatTabSelectComponent.prototype.isSelected = function (channel) {
        return this.currentChannel.url === channel.url;
    };
    /**
     * Fetch a list of all the chats we have access to from the back-end
     */
    ChatTabSelectComponent.prototype.getAccessibleChats = function () {
        var _this = this;
        var queryList = this.sb.sb.OpenChannel.createOpenChannelListQuery();
        queryList.next(function (list, error) {
            if (error) {
                return;
            }
            _this.channelList = list;
            // If we don't have a channel, navigate to the first open one.
            if (!_this.croom.currentChannel.getValue())
                _this.navigateToChannel(_this.channelList[0]);
        });
    };
    /**
     * Navigate to the given channel
     * @param channel the channel to navigate to
     */
    ChatTabSelectComponent.prototype.navigateToChannel = function (channel) {
        this.croom.setCurrentChatRoom(channel);
    };
    /**
     * Toggles the creation mode on
     */
    ChatTabSelectComponent.prototype.createChannel = function () {
        this.createMode = true;
        this.channelCreate = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */]("", [
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* Validators */].maxLength(20)
        ]);
    };
    /**
     * Cancel the creation of a new channel
     */
    ChatTabSelectComponent.prototype.cancelCreation = function () {
        this.createMode = false;
    };
    /**
     * Submits a new channel
     */
    ChatTabSelectComponent.prototype.submitNewChannel = function () {
        var _this = this;
        if (this.channelCreate.valid)
            this.sb.sb.OpenChannel.createChannel(this.channelCreate.value, null, null, function (newChannel) {
                _this.channelList.push(newChannel);
                _this.navigateToChannel(newChannel);
                _this.cancelCreation();
            });
    };
    return ChatTabSelectComponent;
}());
ChatTabSelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'tafullstack-chat-tab-select',
        template: __webpack_require__("../../../../../src/app/components/chat-room/chat-tab-select/chat-tab-select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat-room/chat-tab-select/chat-tab-select.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_send_bird_service__["a" /* SendBirdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_send_bird_service__["a" /* SendBirdService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_room_service__["a" /* ChatRoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_room_service__["a" /* ChatRoomService */]) === "function" && _b || Object])
], ChatTabSelectComponent);

var _a, _b;
//# sourceMappingURL=chat-tab-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-room/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-list dense>\n    <mat-list-item *ngFor=\"let user of displayUsers\" [ngClass]=\"{self: isCurrentUser(user)}\">\n      <img matListAvatar [src]=\"user.profileUrl\">\n      <h3 matLine> {{user.userId}} </h3>\n\n      <button mat-icon-button *ngIf=\"!isCurrentUser(user)\" (click)=\"createDMWith(user)\" color=\"primary\">\n        <mat-icon>email</mat-icon>\n      </button>\n\n    </mat-list-item>\n  </mat-list>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/chat-room/user-list/user-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  height: 100%;\n  padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-room/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__ = __webpack_require__("../../../../../src/app/services/chat-room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__ = __webpack_require__("../../../../../src/app/services/send-bird.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(sb, croom) {
        var _this = this;
        this.sb = sb;
        this.croom = croom;
        /** list of user being displayed */
        this.displayUsers = [];
        /** event handler */
        this._channelHandler = new this.sb.sb.ChannelHandler();
        /**
         * When an user joins an open channel
         * @param channel
         * @param user
         */
        this.onUserEntered = function (channel, user) {
            if (channel.url === _this._currentChannel.url) {
                // Don't double push
                var id = _this.displayUsers.findIndex(function (checkUser) { return checkUser.userId === user.userId; });
                if (id < 0)
                    _this.displayUsers.push(user);
            }
        };
        /**
         * When an user leaves an open channel
         * @param channel
         * @param user
         */
        this.onUserExited = function (channel, user) {
            // If we're in the right channel
            if (channel.url === _this._currentChannel.url) {
                if (_this.displayUsers) {
                    // Find the guy who left
                    var id = _this.displayUsers.findIndex(function (checkUser) { return checkUser.userId === user.userId; });
                    // ... And kill him.
                    if (id)
                        _this.displayUsers.splice(id, 1);
                }
            }
        };
        // Declare our open channel callbacks
        // Note that we don't need group channel callbacks since they're handled by the api
        this._channelHandler.onUserExited = this.onUserExited;
        this._channelHandler.onUserEntered = this.onUserEntered;
        // Check for channel change
        this.croom.currentChannel.subscribe(function (channel) {
            if (!channel)
                return;
            _this._currentChannel = channel;
            if (_this._currentChannel.isOpenChannel())
                _this.hydrateOpenChannel();
            else
                _this.hydratePrivateChannel();
        });
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.sb.sb.addChannelHandler("user-list-handler", this._channelHandler);
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.sb.sb.removeChannelHandler("user-list-handler");
    };
    /**
     * Create a private convo with the supplied user
     * @param user
     */
    UserListComponent.prototype.createDMWith = function (user) {
        this.croom.createDmWith(user);
    };
    /**
     * Check if the supplied user is the current one
     * @param user
     */
    UserListComponent.prototype.isCurrentUser = function (user) {
        return user.userId === this.sb.currentSbUser.getValue().userId;
    };
    /**
     * Gets all the participant in this open channel
     */
    UserListComponent.prototype.hydrateOpenChannel = function () {
        var _this = this;
        var participantListQuery = this._currentChannel.createParticipantListQuery();
        participantListQuery.next(function (users, error) {
            if (error)
                return;
            _this.displayUsers = users;
        });
    };
    /**
     * Gets all the participants in this private channel
     */
    UserListComponent.prototype.hydratePrivateChannel = function () {
        this.displayUsers = this._currentChannel.members;
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'tafullstack-user-list',
        template: __webpack_require__("../../../../../src/app/components/chat-room/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat-room/user-list/user-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__["a" /* SendBirdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_send_bird_service__["a" /* SendBirdService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__["a" /* ChatRoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_chat_room_service__["a" /* ChatRoomService */]) === "function" && _b || Object])
], UserListComponent);

var _a, _b;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout class=\"wrapper\">\n  <div class=\"card-wrap\">\n    <mat-card>\n      <mat-card-title>Welcome to TAFullStack</mat-card-title>\n      <mat-card-subtitle>Please chose an username</mat-card-subtitle>\n\n      <mat-card-content>\n        <mat-form-field fxFlex=\"80\">\n          <input matInput placeholder=\"Some witty nickname\" [formControl]=\"nickNameFormControl\">\n          <mat-error *ngIf=\"nickNameFormControl.hasError('required')\">\n            Username is required\n          </mat-error>\n          <mat-error *ngIf=\"nickNameFormControl.hasError('minlength')\">\n            Username needs to be at least 3 chars.\n          </mat-error>\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions>\n        <div fxFlex=\"100\"></div>\n        <button fxFlex=\"35\" mat-raised-button color=\"primary\" [disabled]=\"!nickNameFormControl.valid\" (click)=\"submitNewNickName()\">Let's go!</button>\n      </mat-card-actions>\n\n    </mat-card>\n    <mat-progress-bar *ngIf=\"busy\" mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-wrap {\n  max-width: 80vw;\n  min-width: 33vw;\n  margin: auto; }\n  .card-wrap .mat-card {\n    text-align: center; }\n    .card-wrap .mat-card .mat-input-container {\n      margin: auto; }\n    .card-wrap .mat-card button {\n      -ms-flex-item-align: right;\n          -ms-grid-row-align: right;\n          align-self: right; }\n\n.wrapper {\n  padding: 24px;\n  height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_send_bird_service__ = __webpack_require__("../../../../../src/app/services/send-bird.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LandingComponent = (function () {
    function LandingComponent(sb, router) {
        this.sb = sb;
        this.router = router;
        this.busy = false;
        /** form control for the nickname the user is inputing */
        this.nickNameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required
        ]);
        this.subscribeUserChange();
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    /**
     * Submits a new nickname to the back end if our form is valid.
     */
    LandingComponent.prototype.submitNewNickName = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.nickNameFormControl.valid) return [3 /*break*/, 2];
                        this.busy = true;
                        return [4 /*yield*/, this.sb.registerUser(this.nickNameFormControl.value)];
                    case 1:
                        _a.sent();
                        this.busy = false;
                        return [3 /*break*/, 2];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Subscribe to internal user change
     */
    LandingComponent.prototype.subscribeUserChange = function () {
        var _this = this;
        this.sb.currentSbUser.subscribe(function (user) {
            if (user) {
                // We have an user, we no longer need to be on the landing page
                _this.router.navigate(['/chat']);
            }
        });
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'tafullstack-landing',
        template: __webpack_require__("../../../../../src/app/components/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/landing/landing.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_send_bird_service__["a" /* SendBirdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_send_bird_service__["a" /* SendBirdService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LandingComponent);

var _a, _b;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/scrollable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollableDirective = (function () {
    function ScrollableDirective(_elRef) {
        this._elRef = _elRef;
        /** if the user is currently at the bottom of the region */
        this._userBottom = true;
        /** event triggered when the scrollable region reaches the top */
        this.onTop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    /**
     * Callback on scroll
     */
    ScrollableDirective.prototype.onScroll = function () {
        var scrollPercent = (this._el.scrollTop + this._el.offsetHeight) / this._el.scrollHeight * 100;
        // If we're at the bottom (with some wiggle room), fix ourselves.
        if (scrollPercent >= 99)
            this._userBottom = true;
        else
            this._userBottom = false;
        // If we're at the top, emit an event.
        if (this._el.scrollTop <= 50) {
            this.onTop.emit(true);
        }
    };
    /**
     * sticks to the bottom if the user hasn't scrolled on its own.
     */
    ScrollableDirective.prototype.scrollToBottomIfNotUp = function () {
        var _this = this;
        if (this._userBottom) {
            setTimeout(function () { return _this._el.scrollBy(0, _this._el.scrollHeight); });
        }
    };
    /**
     * Force a scroll to the bottom
     */
    ScrollableDirective.prototype.forceBottom = function () {
        var _this = this;
        this._userBottom = true;
        setTimeout(function () { return _this._el.scrollBy(0, _this._el.scrollHeight); });
    };
    Object.defineProperty(ScrollableDirective.prototype, "_el", {
        /** the element we're currently scrolling */
        get: function () { return this._elRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    return ScrollableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ScrollableDirective.prototype, "onTop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("scroll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScrollableDirective.prototype, "onScroll", null);
ScrollableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[tafullstackScrollable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], ScrollableDirective);

var _a;
//# sourceMappingURL=scrollable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var materialImports = [
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatIconModule */]
];
var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ].concat(materialImports),
        exports: materialImports.slice(),
        declarations: []
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes_guard_chat_guard_service__ = __webpack_require__("../../../../../src/app/routing/routes/guard/chat-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_routes__ = __webpack_require__("../../../../../src/app/routing/routes/_.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__routes_routes__["a" /* appRoutes */], {
                enableTracing: !__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production
            })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_0__routes_guard_chat_guard_service__["a" /* ChatGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/routing/routes/_.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guard_chat_guard_service__ = __webpack_require__("../../../../../src/app/routing/routes/guard/chat-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_chat_room_chat_room_component__ = __webpack_require__("../../../../../src/app/components/chat-room/chat-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");



var appRoutes = [
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_2__components_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'chat', canActivate: [__WEBPACK_IMPORTED_MODULE_0__guard_chat_guard_service__["a" /* ChatGuard */]], component: __WEBPACK_IMPORTED_MODULE_1__components_chat_room_chat_room_component__["a" /* ChatRoomComponent */] },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', redirectTo: '/landing' },
];
//# sourceMappingURL=_.routes.js.map

/***/ }),

/***/ "../../../../../src/app/routing/routes/guard/chat-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_send_bird_service__ = __webpack_require__("../../../../../src/app/services/send-bird.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Guard against access to the chat as a non authed user.
 */
var ChatGuard = (function () {
    function ChatGuard(sb) {
        this.sb = sb;
    }
    ChatGuard.prototype.canActivate = function () {
        // Simply ensure we have an sb user
        return Boolean(this.sb.currentSbUser.getValue());
    };
    return ChatGuard;
}());
ChatGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_send_bird_service__["a" /* SendBirdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_send_bird_service__["a" /* SendBirdService */]) === "function" && _a || Object])
], ChatGuard);

var _a;
//# sourceMappingURL=chat-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/chat-room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__send_bird_service__ = __webpack_require__("../../../../../src/app/services/send-bird.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatRoomService = (function () {
    function ChatRoomService(sb) {
        this.sb = sb;
        this._currentChannel = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    Object.defineProperty(ChatRoomService.prototype, "currentChannel", {
        get: function () { return this._currentChannel; },
        enumerable: true,
        configurable: true
    });
    ChatRoomService.prototype.setCurrentChatRoom = function (channel) {
        // We were given a channel url
        if (typeof channel === typeof "abc") {
            // fetch our open channel or our group channel
            open ? this.sb.sb.OpenChannel.getChannel(channel, function (fetchedChannel) { return channel = fetchedChannel; }) :
                this.sb.sb.GroupChannel.getChannel(channel, function (fetchedChannel) { return channel = fetchedChannel; });
        }
        var newChannel = channel;
        if (newChannel) {
            var oldChan = this.currentChannel.getValue();
            // We're trying to re-enter the same thing, no need.
            if (oldChan && oldChan.url === newChannel.url)
                return;
            // If we were in an open channel before, stop listening to it now.
            if (oldChan && oldChan.isOpenChannel())
                oldChan.exit(function (channel, error) { });
            // If we're setting an open channel as the current, we want to enter it (subscribe to events in it)
            if (newChannel.isOpenChannel())
                newChannel.enter(function (openChannel, error) { });
            // Finally we can tell the app this is now the new main channel
            this._currentChannel.next(newChannel);
        }
    };
    ChatRoomService.prototype.createDmWith = function (u) {
        var _this = this;
        if (typeof u === typeof {})
            u = u.userId;
        if (this.sb.isCurrentUser(u))
            throw "trying to create a convo with oneself. -that's deep-";
        this.sb.sb.GroupChannel.createChannelWithUserIds([u], true, function (groupChannel, error) {
            if (error) {
                return;
            }
            _this.setCurrentChatRoom(groupChannel);
        });
    };
    return ChatRoomService;
}());
ChatRoomService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__send_bird_service__["a" /* SendBirdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__send_bird_service__["a" /* SendBirdService */]) === "function" && _a || Object])
], ChatRoomService);

var _a;
//# sourceMappingURL=chat-room.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/send-bird.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendBirdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
* Main helper service for SendBird
*/
var SendBirdService = (function () {
    function SendBirdService() {
        /** main sendbird instance */
        this._sb = new SendBird({ appId: "C7B940CE-B68D-4979-9E95-7C2CD94DE2F3" });
        this._currentSbUser = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        //this.registerUser(String(Math.floor(Math.random() * 9e15)));
    }
    Object.defineProperty(SendBirdService.prototype, "sb", {
        /** app-wide sendbird instance */
        get: function () { return this._sb; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendBirdService.prototype, "currentSbUser", {
        get: function () { return this._currentSbUser; },
        enumerable: true,
        configurable: true
    });
    /**
     * Registers as a given user to sendbird
     * @param userName unique name to chose
     */
    SendBirdService.prototype.registerUser = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return _this._sb.connect(userName, function (user, error) {
                        if (!error) {
                            _this._currentSbUser.next(user);
                            resolve(user);
                        }
                        else
                            reject(error);
                    }); })];
            });
        });
    };
    SendBirdService.prototype.isCurrentUser = function (u) {
        var uid = typeof u === typeof {} ? u.userId : u;
        return uid === this.currentSbUser.getValue().userId;
    };
    return SendBirdService;
}());
SendBirdService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SendBirdService);

//# sourceMappingURL=send-bird.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map