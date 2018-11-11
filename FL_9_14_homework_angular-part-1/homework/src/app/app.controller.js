app.controller('ctrl2', function ($scope) {
    $scope.firstPost = wallPosts[0].name;
    $scope.userPosts = wallPosts;
    $scope.showInput = false;
    $scope.addLike = false;
    $scope.likeClass = '';
    $scope.show = function () {
        $scope.showInput = !$scope.showInput;
    }
    $scope.cancel = function () {
        $scope.showInput = false;
    }
    $scope.savePost = function () {
        wallPosts.push({
            id: wallPosts.length,
            name: `Natasha Milostrone`,
            title: $scope.addTitle,
            message: $scope.addMessage,
            photo: `assets/img/women2.png`,
            like: 0,
            edit: true
        });
        $scope.showInput = false;
    }
    $scope.editPost = function () {
        $scope.showEdit = !$scope.showEdit;
    }
    $scope.like = function (event) {
        $scope.addLike = !$scope.addLike;
        if (!$scope.addLike) {
            wallPosts[event.currentTarget.id].like--;
        } else {
            wallPosts[event.currentTarget.id].like++;
        }
    }
});