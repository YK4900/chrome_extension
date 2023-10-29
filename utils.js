export async function getActiveTabURL() { // to check the current active tab
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });

    return tabs[0];
}

