var list = new Vue({
    el: '#list',
    data: {
        snippets: snippets[cats[0].name]
    }
})
new Vue({
    el: '#cats',
    data: {
        cats: cats
    },
    methods: {
        greet: function (key) {
            // 方法内 `this` 指向 vm
            list.snippets = snippets[key];
            console.log(JSON.stringify(snippets[key], null, '\t'));
        }
    }
});
console.log(JSON.stringify(snippets, null, '\t'));
console.log(JSON.stringify({
    data: {
        cats: cats
    }
}, null, '\t'));