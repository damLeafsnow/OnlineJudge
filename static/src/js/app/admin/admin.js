require(["jquery", "avalon", "bootstrap"], function ($, avalon) {

    avalon.ready(function () {

        function li_active(selector) {
            $(selector).attr("class", "list-group-item active");
        }

        function li_inactive(selector) {
            $(".list-group-item").attr("class", "list-group-item");
        }

        function show_template(url) {
            $("#loading-gif").show();
            vm.template_url = url;
        }

        var hash = window.location.hash.substring(1);

        if (!hash) {
            hash = "index/index";
        }

        var superAdminNav = [
                {    name: "首页",
                    children: [{name: "主页", hash: "#index/index"},
                               {name: "监控", hash: "#monitor/monitor"}]
                },
                {
                    name: "通用",
                    children: [{name: "公告管理", hash: "#announcement/announcement"},
                               {name: "用户管理", hash: "#user/user_list"}]
                },
                {
                    name: "题目管理",
                    children: [{name: "题目列表", hash: "#problem/problem_list"},
                               {name: "创建题目", hash: "#problem/add_problem"}]
                },
                {
                    name: "比赛管理",
                    children: [{name: "比赛列表", hash: "#contest/contest_list"},
                               {name: "创建比赛", hash: "#contest/add_contest"}]
                },
                {
                    name: "小组管理",
                    children: [{name: "小组列表", hash: "#group/group"},
                               {name: "加入小组请求", hash: "#group/join_group_request_list"}]
                }
        ];

        var adminNav = [
                {    name: "首页",
                    children: [{name: "主页", hash: "#index/index"}]
                },
                {
                    name: "通用",
                    children: [{name: "公告管理", hash: "#announcement/announcement"}]
                },
                {
                    name: "比赛管理",
                    children: [{name: "比赛列表", hash: "#contest/contest_list"},
                               {name: "创建比赛", hash: "#contest/add_contest"}]
                },
                {
                    name: "小组管理",
                    children: [{name: "小组列表", hash: "#group/group"},
                               {name: "加入小组请求", hash: "#group/join_group_request_list"}]
                }
        ];

        var vm = avalon.define({
            $id: "admin",
            template_url: "template/" + hash + ".html",
            username: "",
            groupId: -1,
            problemId: -1,
            adminNavList: [],
            $contestMode: -1,
            $problemId: -1,
            $contestId: -1,
            hide_loading: function () {
                $("#loading-gif").hide();
            },
            getLiId: function(hash){
                return hash.replace("#", "li-").replace("/", "-");
            }
        });


        $.ajax({
            url: "/api/user/",
            method: "get",
            dataType: "json",
            success: function(data){
                if(!data.code){
                    vm.username = data.data.username;
                    if (data.data.admin_type == 2){
                        vm.adminNavList = superAdminNav;
                    }
                    else{
                        vm.adminNavList = adminNav;
                    }
                }
            }
        });

        vm.$watch("showGroupDetailPage", function (groupId) {
            vm.groupId = groupId;
            vm.template_url = "template/group/group_detail.html";
        });

        vm.$watch("showEditProblemPage", function (problemId) {
            vm.problemId = problemId;
            vm.template_url = "template/problem/edit_problem.html";
        });

        vm.$watch("showProblemListPage", function () {
            vm.template_url = "template/problem/problem_list.html";
        });

        vm.$watch("showGroupListPage", function () {
            vm.template_url = "template/group/group.html";
        });

        vm.$watch("showProblemSubmissionPage", function (problemId) {
            vm.problemId = problemId;
            vm.template_url = "template/problem/submission_list.html";
        });

        vm.$watch("showContestProblemPage", function (problemId, contestId, contestMode) {
            vm.$problemId = problemId;
            vm.$contestId = contestId;
            vm.$contestMode = contestMode
            vm.template_url = "template/contest/edit_problem.html";
        });

        vm.$watch("showContestListPage", function () {
            vm.template_url = "template/contest/contest_list.html";
        });

        vm.$watch("showContestSubmissionPage", function (problemId, contestId, contestMode) {
            vm.$problemId = problemId;
            vm.$contestId = contestId;
            vm.$contestMode = contestMode
            vm.template_url = "template/contest/submission_list.html";
        });

        avalon.scan();

        window.onhashchange = function () {
            var hash = window.location.hash.substring(1);
            if (hash) {
                li_inactive(".list-group-item");
                li_active("#li-" + hash.replace("/", "-"));
                show_template("template/" + hash + ".html");
            }
        };
        setTimeout(function(){li_active("#li-" + hash.replace("/", "-"));}, 500)
    });


});