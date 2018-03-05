// 答案 -> bcacacdaba
getAnswer();
// 计算答案
function getAnswer() {
    var optarr = ['a', 'b', 'c', 'd'];
    var opts = [];
    for (var i = 0; i < 10; i++) {
        opts.push(optarr);
    }
    var answers = dikaer(opts);
    // 暴力枚举 orz
    for (var n = 0; n < answers.length; n++) {
        if (check(answers[n])) {
            console.log(answers[n].join(''));
        }
    }
}
// 同时检查所有答案
function check(answer) {
    var ret = true;
    if (!(ret = check3(answer))) return false;
    if (!(ret = check4(answer))) return false;
    if (!(ret = check5(answer))) return false;
    if (!(ret = check6(answer))) return false;
    if (!(ret = check7(answer))) return false;
    if (!(ret = check8(answer))) return false;
    if (!(ret = check9(answer))) return false;
    if (!(ret = check10(answer))) return false;
    return ret;
}
// 计算某个选项的数量
function count(ansarr, opt) {
    var count = 0;
    for (var i = 0; i < ansarr.length; i++) {
        if (ansarr[i] == opt) count++;
    }
    return count;
}
// dikaer计算
function dikaer(opts) {
    return opts.reduce(function func(a, b) {
        var ret = [];
        a.forEach(function(a) {
            b.forEach(function(b) {
                ret.push(a.concat([b]));
            });
        });
        return ret;
    }, [[]]);
}
// 检查问题3
function check3(ans) {
    if (ans[3 - 1] == 'a')
        return (ans[6 - 1] == ans[2 - 1] && ans[2 - 1] == ans[4 - 1]) && (ans[6 - 1] != ans[3 - 1]);
    if (ans[3 - 1] == 'b')
        return (ans[3 - 1] == ans[2 - 1] && ans[2 - 1] == ans[4 - 1]) && (ans[3 - 1] != ans[6 - 1]);
    if (ans[3 - 1] == 'c')
        return (ans[6 - 1] == ans[3 - 1] && ans[3 - 1] == ans[4 - 1]) && (ans[6 - 1] != ans[2 - 1]);
    if (ans[3 - 1] == 'd')
        return (ans[6 - 1] == ans[2 - 1] && ans[2 - 1] == ans[3 - 1]) && (ans[6 - 1] != ans[4 - 1]);
}
// 检查问题4
function check4(ans) {
    if (ans[4 - 1] == 'a')
        return (ans[1 - 1] == ans[5 - 1]);
    if (ans[4 - 1] == 'b')
        return (ans[2 - 1] == ans[7 - 1]);
    if (ans[4 - 1] == 'c')
        return (ans[1 - 1] == ans[9 - 1]);
    if (ans[4 - 1] == 'd')
        return (ans[6 - 1] == ans[10 - 1]);
}
// 检查问题5
function check5(ans) {
    if (ans[5 - 1] == 'a')
        return (ans[8 - 1] == ans[5 - 1]);
    if (ans[5 - 1] == 'b')
        return (ans[4 - 1] == ans[5 - 1]);
    if (ans[5 - 1] == 'c')
        return (ans[9 - 1] == ans[5 - 1]);
    if (ans[5 - 1] == 'd')
        return (ans[7 - 1] == ans[5 - 1]);
}
// 检查问题6
function check6(ans) {
    if (ans[6 - 1] == 'a')
        return (ans[2 - 1] == ans[4 - 1]) && (ans[4 - 1] == ans[8 - 1]);
    if (ans[6 - 1] == 'b')
        return (ans[1 - 1] == ans[6 - 1]) && (ans[6 - 1] == ans[8 - 1]);
    if (ans[6 - 1] == 'c')
        return (ans[3 - 1] == ans[10 - 1]) && (ans[10 - 1] == ans[8 - 1]);
    if (ans[6 - 1] == 'd')
        return (ans[5 - 1] == ans[9 - 1]) && (ans[9 - 1] == ans[8 - 1]);
}
// 检查问题7
function check7(ans) {
    var aCount = count(ans, 'a');
    var bCount = count(ans, 'b');
    var cCount = count(ans, 'c');
    var dCount = count(ans, 'd');
    if (ans[7 - 1] == 'a')
        return (cCount < aCount) && (cCount < bCount) && (cCount < dCount);
    if (ans[7 - 1] == 'b')
        return (bCount < aCount) && (bCount < cCount) && (bCount < dCount);
    if (ans[7 - 1] == 'c')
        return (aCount < bCount) && (aCount < cCount) && (aCount < dCount);
    if (ans[7 - 1] == 'd')
        return (dCount < aCount) && (dCount < bCount) && (dCount < cCount);
}
// 检查问题8
function check8(ans) {
    if (ans[8 - 1] == 'a')
        return Math.abs(ans[7 - 1].charCodeAt() - ans[1 - 1].charCodeAt()) > 1;
    if (ans[8 - 1] == 'b')
        return Math.abs(ans[5 - 1].charCodeAt() - ans[1 - 1].charCodeAt()) > 1;
    if (ans[8 - 1] == 'c')
        return Math.abs(ans[2 - 1].charCodeAt() - ans[1 - 1].charCodeAt()) > 1;
    if (ans[8 - 1] == 'd')
        return Math.abs(ans[10 - 1].charCodeAt() - ans[1 - 1].charCodeAt()) > 1;
}
// 检查问题9
function check9(ans) {
    var conditiona = (ans[1 - 1] == ans[6 - 1]);
    var conditionb = false;
    if (ans[9 - 1] == 'a')
        conditionb = (ans[6 - 1] == ans[5 - 1]);
    if (ans[9 - 1] == 'b')
        conditionb = (ans[10 - 1] == ans[5 - 1]);
    if (ans[9 - 1] == 'c')
        conditionb = (ans[2 - 1] == ans[5 - 1]);
    if (ans[9 - 1] == 'd')
        conditionb = (ans[9 - 1] == ans[5 - 1]);
    return conditiona != conditionb;
}
// 检查问题10
function check10(ans) {
    var aCount = count(ans, 'a');
    var bCount = count(ans, 'b');
    var cCount = count(ans, 'c');
    var dCount = count(ans, 'd');
    var counts = [aCount, bCount, cCount, dCount].sort(function(a, b) {
        return a - b;
    });
    var maxV = counts[3];
    var minV = counts[0];
    if (ans[10 - 1] == 'a')
        return (maxV - minV) == 3;
    if (ans[10 - 1] == 'b')
        return (maxV - minV) == 2;
    if (ans[10 - 1] == 'c')
        return (maxV - minV) == 4;
    if (ans[10 - 1] == 'd')
        return (maxV - minV) == 1;
}
