ScrollObserver
===========

Simple class for scroll observing. You can add a X and / or a Y coordinate and every time the user scrolls befor or behind this coordinate your function will be executed.

How to use
----------

Example 1:
    ScrollObserver.getInstance().add({
        'y': 40,
        'x': 40,
        
        'beforeY': function() {
            alert("BeforeY");
        },
        
        'afterY': function() {
            alert("AfterY");
        },
        
        'beforeX': function() {
            alert("BeforeX");
        },
        
        'afterX': function() {
            alert("AfterX");
        }
    });
    
Example 2:
    ScrollObserver.getInstance().add({
        'y': 40,
        
        'afterY': function() {
            alert("AfterY");
        }
        
    });