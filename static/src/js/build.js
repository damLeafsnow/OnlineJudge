({
	// RequireJS 通过一个相对的路径 baseUrl来加载所有代码。baseUrl通常被设置成data-main属性指定脚本的同级目录。
	baseUrl: "./js",
	// 第三方脚本模块的别名,jquery比libs/jquery-1.11.1.min.js简洁明了；
    paths: {
        jquery: "empty:",
        avalon: "empty:",
        editor: "utils/editor",
        jcountdown: "lib/jcountdown/jcountdown",
        uploader: "utils/uploader",
        formValidation: "utils/formValidation",
        codeMirror: "utils/codeMirror",
        bsAlert: "utils/bsAlert",
        problem: "app/oj/problem/problem",
        contest: "app/admin/contest/contest",
        csrfToken: "utils/csrfToken",
        admin: "app/admin/admin",
        chart: "lib/chart/Chart",
        tagEditor: "lib/tagEditor/jquery.tag-editor.min",
        jqueryUI: "lib/jqueryUI/jquery-ui",
        bootstrap: "lib/bootstrap/bootstrap",
        datetimePicker: "lib/datetime_picker/bootstrap-datetimepicker",
        validator: "lib/validator/validator",
        ZeroClipboard: "lib/ZeroClipboard/ZeroClipboard",

        // ------ 下面写的都不要直接用，而是使用上面的封装版本 ------
        //富文本编辑器simditor -> editor
        simditor: "lib/simditor/simditor",
        "simple-module": "lib/simditor/module",
        "simple-hotkeys": "lib/simditor/hotkeys",
        "simple-uploader": "lib/simditor/uploader",

        //code mirror 代码编辑器 ->codeMirror
        _codeMirror: "lib/codeMirror/codemirror",
        codeMirrorClang: "lib/codeMirror/language/clike",

        // bootstrap组件
        modal: "lib/bootstrap/modal",
        dropdown: "lib/bootstrap/dropdown",
        transition: "lib/bootstrap/transition",
        collapse: "lib/bootstrap/collapse",

        //百度webuploader -> uploader
        webUploader: "lib/webuploader/webuploader",

        //"_datetimePicker": "lib/datetime_picker/bootstrap-datetimepicker",

        //以下都是页面 script 标签引用的js
        announcement_0_pack: "app/admin/announcement/announcement",
        userList_1_pack: "app/admin/user/userList",
        problem_2_pack: "app/oj/problem/problem",
        submissionList_3_pack: "app/admin/problem/submissionList",
        contestCountdown_4_pack: "app/oj/contest/contestCountdown",
        addProblem_5_pack: "app/admin/problem/addProblem",
        problem_6_pack: "app/admin/problem/problem",
        contestList_7_pack: "app/admin/contest/contestList",
        admin_8_pack: "app/admin/admin",
        login_9_pack: "app/oj/account/login",
        addContest_10_pack: "app/admin/contest/addContest",
        changePassword_11_pack: "app/oj/account/changePassword",
        monitor_12_pack: "app/admin/monitor/monitor",
        editProblem_13_pack: "app/admin/contest/editProblem",
        joinGroupRequestList_14_pack: "app/admin/group/joinGroupRequestList",
        group_15_pack: "app/oj/group/group",
        editProblem_16_pack: "app/admin/problem/editProblem",
        register_17_pack: "app/oj/account/register",
        groupDetail_18_pack: "app/admin/group/groupDetail",
        contestPassword_19_pack: "app/oj/contest/contestPassword",
        group_20_pack: "app/admin/group/group",
        submissionList_21_pack: "app/admin/contest/submissionList"
    },
    findNestedDependencies: true,
    appDir: "../",
    dir: "../../release/",
    modules: [
        {
            name: "announcement_0_pack"
        },
        {
            name: "userList_1_pack"
        },
        {
            name: "problem_2_pack"
        },
        {
            name: "submissionList_3_pack"
        },
        {
            name: "contestCountdown_4_pack"
        },
        {
            name: "addProblem_5_pack"
        },
        {
            name: "problem_6_pack"
        },
        {
            name: "contestList_7_pack"
        },
        {
            name: "admin_8_pack"
        },
        {
            name: "login_9_pack"
        },
        {
            name: "addContest_10_pack"
        },
        {
            name: "changePassword_11_pack"
        },
        {
            name: "monitor_12_pack"
        },
        {
            name: "editProblem_13_pack"
        },
        {
            name: "joinGroupRequestList_14_pack"
        },
        {
            name: "group_15_pack"
        },
        {
            name: "editProblem_16_pack"
        },
        {
            name: "register_17_pack"
        },
        {
            name: "groupDetail_18_pack"
        },
        {
            name: "contestPassword_19_pack"
        },
        {
            name: "group_20_pack"
        },
        {
            name: "submissionList_21_pack"
        }
    ],
    optimizeCss: "standard",
})