function getClosestToZero(...nums) {
    const absNums = nums.map((value) => {
        return Math.abs(value);
    });
    return nums[absNums.indexOf(Math.min(...absNums))];
}

getClosestToZero();
