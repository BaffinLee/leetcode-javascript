/**
 * 155. Min Stack
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * 
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 * 
 * Example:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 */

class MinStack {
private:
    std::stack<int> stack;
    std::stack<int> min_stack;
public:
    /** initialize your data structure here. */
    //MinStack() {
    //    
    //}
    
    void push(int x) {
        stack.push(x);
        if (min_stack.empty() || min_stack.top() >= x) {
            min_stack.push(x);
        }
    }
    
    void pop() {
        if (stack.top() == min_stack.top()) {
            min_stack.pop();
        }
        stack.pop();
    }
    
    int top() {
        return stack.top();
    }
    
    int getMin() {
        return min_stack.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */

// 这题是 C++ 代码，leetcode 不支持 javascript
// stack 栈 其实类似 js 的数组，不过只能后进先出
// min_stack 保存历史最小值的栈，相同的历史最小值也要存着
// 如果 pop 出去的正好是最小值，min_stack 也 pop一次就好

