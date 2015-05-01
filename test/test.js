var assert = require("assert");
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});

fs = require('fs');
describe('File', function(){
    describe('#readFile()', function(){
        it('should read test.ls without error', function(done){
            fs.readFile('test.ls', function(err){
                if (err) throw err;
                done();
            });
        });
    });
});

/*
    describe (moduleName, testDetails)
    由上述代码可看出，describe是可以嵌套的，比如上述代码嵌套的两个describe就可以理解成测试人员希望测试Array模块下的#indexOf() 子模块。module_name 是可以随便取的，关键是要让人读明白就好。
    it (info, function)
    具体的测试语句会放在it的回调函数里，一般来说info字符串会写期望的正确输出的简要一句话文字说明。当该it block内的test failed的时候控制台就会把详细信息打印出来。一般是从最外层的describe的module_name开始输出（可以理解成沿着路径或者递归链或者回调链），最后输出info，表示该期望的info内容没有被满足。一个it对应一个实际的test case
    assert.equal (exp1, exp2)
    断言判断exp1结果是否等于exp2, 这里采取的等于判断是== 而并非 === 。即 assert.equal(1, ‘1’) 认为是True。这只是nodejs里的assert.js的一种断言形式，下文会提到同样比较常用的should.js。
	done ()
	按照瀑布流编程习惯，取名done是表示你回调的最深处，也就是结束写嵌套回调函数。但对于回调链来说done实际上意味着告诉mocha从此处开始测试，一层层回调回去。
	it里面只能调用一次done

	skip only
	before after
	mocha -u tdd test.js
	前文所讲的describe, it, before, after等都属于BDD的范畴，对于TDD，我们用suite, test, setup, teardown
	
*/