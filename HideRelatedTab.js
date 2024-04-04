// Register on Load of the Form, pass execution parameter

function onLoad(executionContext)
{
	// Get Form Context
	const formContext = executionContext.getFormContext();
	// Get Navigation collection
	const navigations = formContext.ui.navigation.items;
	// Get User Roles
	const userRoles = Xrm.Utility.getGlobalContext().userSettings.roles;
	// Verify if User is Admin
	const isAdmin = isAdminRole();
	// Bring tabs to be hidden for other users (non admin)
	//var tabObj1 = formContext.ui.tabs.get("tab_8");
    var tabObj2 = formContext.ui.tabs.get("tab_5");
    var tabObj3 = formContext.ui.tabs.get("tab_6");
    var tabObj4 = formContext.ui.tabs.get("tab_9");
    var tabObj5 = formContext.ui.tabs.get("tab_11");
    var tabObj6 = formContext.ui.tabs.get("tab_3");
    var tabObj7 = formContext.ui.tabs.get("tab_12");
    var tabObj8 = formContext.ui.tabs.get("tab_10");
    var tabObj9 = formContext.ui.tabs.get("PrivilegingReq");
    var tabObj10 = formContext.ui.tabs.get("Benchmarks");

	// If not Admin
	if (!isAdmin)
	{
		// Hide all related tabs
		//tabObj1.setVisible(false);
        tabObj2.setVisible(false);
        tabObj3.setVisible(false);
        tabObj4.setVisible(false);
        tabObj5.setVisible(false);
        tabObj6.setVisible(false);
        tabObj7.setVisible(false);
        tabObj8.setVisible(false);
        tabObj9.setVisible(false);
        tabObj10.setVisible(false);

		navigations.forEach(function (item)
		{
			item.setVisible(false);
		});
	}
}
// Verify if User has a role named "System Administrator"

function isAdminRole()
{
	const roles = Xrm.Utility.getGlobalContext().userSettings.roles;
	if (roles === null) return false;
	var hasRole = false;
	roles.forEach(function (item)
	{
		if (item.name.toLowerCase() === "system administrator" || item.name.toLowerCase() === "cc stage 1 editors" || item.name.toLowerCase() === "cc stage 2 editors" || item.name.toLowerCase() === "cc stage 3 editors" || item.name.toLowerCase() === "cc stage 4 editors")
		// 
        {
			hasRole = true;
		}
	});
	return hasRole;
}
