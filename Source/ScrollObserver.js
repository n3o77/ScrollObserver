/*
---
description: Simple class for scroll observing. You can add a X and / or a Y coordinate and every time the user scrolls befor or behind this coordinate your function will be executed.

license: MIT-style

authors:
- Steffen Persch

requires:
- MooTools 1.2.x

provides: [ScrollObserver]

...
*/

var ScrollObserver = new Class.Singleton({
    
    observer: new Array(),
    
    initialize: function() {
        this.loadEvents();
    },
    
    loadEvents: function() {
        var inst = this;
        window.addEvent('scroll', function(event) {
            inst.scroll(event);
        });
    },
    
    scroll: function(event) {
        this.checkObserver();
    },
    
    checkObserver: function() {
        var inst = this;
        this.observer.each(function(item, index) {
            var events = inst.checkPosition(item);
            inst.runMethods(item, events);
        });
    },
    
    runMethods: function(item, events) {
        if (!item.lastEvents.contains(events[0])
            && typeof item[events[0]] != 'undefined') {
            
            item[events[0]].run();
        }

        if (!item.lastEvents.contains(events[1]) 
            && typeof item[events[1]] != 'undefined') {
            
            item[events[1]].run();
        }
        
        item.lastEvents = events;
    },
    
    checkPosition: function(pos) {
        var result = new Array();
        var scrollPos = window.getScroll();
        
        if(scrollPos.x < pos.x) {
            result.push('beforeX');
        } else {
            result.push('afterX');
        }
        
        if(scrollPos.y < pos.y) {
            result.push('beforeY');
        } else {
            result.push('afterY');
        }
        
        return result;
    },
    
    add: function(options) {
        options.lastEvents = new Array();
        this.observer.include(options);
        this.checkObserver();
    }
    
});

Class.Singleton = new Class({

    initialize: function(classDefinition, classOptions){
        this.singletonClass = new Class(classDefinition);
        this.classOptions = classOptions;
    },

    getInstance: function() {
        return this.instance || new this.singletonClass(this.classOptions);
    }

});