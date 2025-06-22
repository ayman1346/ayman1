// منع نسخ المحتوى
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    e.stopPropagation();
});

document.addEventListener('keydown', function(e) {
    if(e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        e.stopPropagation();
    }
    if(e.ctrlKey && e.key === 'U') {
        e.preventDefault();
        e.stopPropagation();
    }
    if(e.ctrlKey && e.key === 'S') {
        e.preventDefault();
        e.stopPropagation();
    }
    if(e.ctrlKey && e.key === 'C') {
        e.preventDefault();
        e.stopPropagation();
    }
    if(e.ctrlKey && e.key === 'A') {
        e.preventDefault();
        e.stopPropagation();
    }
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    e.stopPropagation();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    e.stopPropagation();
});

// حماية الأكواد
(function() {
    'use strict';
    
    // منع الوصول إلى الكونسول
    window.console = {
        log: function() {},
        debug: function() {},
        info: function() {},
        warn: function() {},
        error: function() {},
        trace: function() {},
        dir: function() {},
        time: function() {},
        timeEnd: function() {},
        group: function() {},
        groupEnd: function() {},
        assert: function() {},
        dirxml: function() {},
        profile: function() {},
        profileEnd: function() {},
        count: function() {},
        markTimeline: function() {},
        timeStamp: function() {},
        clear: function() {}
    };

    // منع الوصول إلى بعض الخصائص المهمة
    const protectedProps = ['document', 'window', 'localStorage', 'sessionStorage', 'navigator', 'history', 'location'];
    protectedProps.forEach(prop => {
        Object.defineProperty(window, prop, {
            get: function() {
                return null;
            }
        });
    });

    // منع تغيير الأكواد
    Object.freeze(window);
    Object.freeze(document);
    Object.freeze(navigator);
    Object.freeze(history);
    Object.freeze(location);

    // منع إضافة خصائص جديدة
    Object.preventExtensions(window);
    Object.preventExtensions(document);
    Object.preventExtensions(navigator);
    Object.preventExtensions(history);
    Object.preventExtensions(location);

    // منع الوصول إلى الأكواد المصدرية
    window.onerror = function() {
        return true;
    };

    window.onbeforeunload = function() {
        return null;
    };

    // منع تحميل الأكواد المصدرية
    document.documentElement.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // منع استخدام DevTools
    window.__defineGetter__('devtools', function() {
        return false;
    });

    window.__defineSetter__('devtools', function() {
        return false;
    });
})();

// منع التحميل المباشر للصور
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});

// منع التحميل المباشر للصفحات
window.onbeforeunload = function() {
    return "لا يمكن مغادرة الصفحة";
};

// منع فتح الموقع في إطار آخر
if (window.self !== window.top) {
    window.top.location = window.self.location;
}

// منع التحميل المباشر للصفحات
window.addEventListener('load', function() {
    if (document.referrer === '') {
        window.location.href = 'https://your-domain.com';
    }
});

// منع طباعة الصفحة
window.onbeforeprint = function() {
    return false;
};

// منع استخدام DevTools
window.addEventListener('load', function() {
    if (window.devtools) {
        window.location.href = 'https://your-domain.com';
    }
    window.addEventListener('devtoolschange', function(e) {
        if (e.detail.isOpen) {
            window.location.href = 'https://your-domain.com';
        }
    });
});
