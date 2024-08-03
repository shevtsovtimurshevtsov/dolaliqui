function isPointInsideShape(point, shape, isOEFilled) {
    if (isOEFilled) {
        return isPointInsideEvenOdd(point, shape);
    } else {
        return isPointInsideNonZero(point, shape);
    }
}

function isPointInsideEvenOdd(point, shape) {
    let crossings = 0;
    for (let edge of shape.edges) {
        if (doesRayCrossEdge(point, edge)) {
            crossings++;
        }
    }
    return (crossings % 2) === 1;
}

function isPointInsideNonZero(point, shape) {
    let windingNumber = 0;
    for (let edge of shape.edges) {
        if (doesRayCrossEdge(point, edge)) {
            if (isEdgeCounterClockwise(edge)) {
                windingNumber++;
            } else {
                windingNumber--;
            }
        }
    }
    return windingNumber !== 0;
}

function doesRayCrossEdge(point, edge) {
    // Implement ray crossing logic here
}

function isEdgeCounterClockwise(edge) {
    // Implement logic to determine if an edge is counter-clockwise
}
