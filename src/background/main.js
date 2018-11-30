browser.browserAction.onClicked.addListener(function () {
    getCurrentTab(function (tab) {
       browser.tabs.sendMessage(tab.id, {
            "call": "open"
       });
    });
});

browser.runtime.onMessage.addListener(function (request) {
    if (request.message == "log") {
        $.ajax({
            url: 'https://autorefactoring.lifia.info.unlp.edu.ar/refactoring-tool-logger/save_version',
            contentType : 'application/json',
            data: JSON.stringify(request.version),
            type: "POST"
        });
    }
});


function getCurrentTab (callback) {
    try {
        browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
            callback(tabs[0]);
        });
    }
    catch (err) {
        console.log("exception");
        console.log(err);
    }
}

