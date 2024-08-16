function processExpression(expr, scope, clip) {
    return expr ? scope.signalRef(expr) : !!clip;
}

// Examples
const scope = {
    signalRef: (e) => `SignalRef: ${e}`
};

console.log(processExpression("someExpr", scope, true));  // Outputs: "SignalRef: someExpr"
console.log(processExpression(null, scope, false));       // Outputs: false
console.log(processExpression(undefined, scope, true));   // Outputs: true
