chrome.contextMenus.create({
    title: "Share Via Whatsapp Web",
    contexts: ["selection", "link"],
    onclick: shareToWhatsapp,
});

function shareToWhatsapp(ele, tab) {
    let shareText = ele.selectionText ? ele.selectionText : ele.linkUrl;
    chrome.tabs.create({
        url: "http://web.whatsapp.com/send?text=" + encodeURI(shareText),
    });
}