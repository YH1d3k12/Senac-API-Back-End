function IsItATriangle(segmentA, segmentB, segmentC)
{
    if (!isNaN(segmentA) && !isNaN(segmentB) &&!isNaN(segmentC))
    {
        let isTriangle = false;
        let msg = 'is not a triangle';

        let A = parseFloat(segmentA);
        let B = parseFloat(segmentB);
        let C = parseFloat(segmentC);

        if (A + B > C && A + C > B && B + C > A)
        {
            isTriangle = true;
            
            if (A == B && A == C && B == C)
            {
                let msg = 'is a equilateral triangle';
            }
            else if (A == B || A == C || B == C)
            {
                let msg = 'is a isosceles triangle';
            }
            else
            {
                let msg = 'is a scalene triangle';
            }
        }
    }
    else
    {
        throw new TypeError("Arguments should be numbers");
    }

    return {
        isItTriangle: isTriangle,
        message: msg
    };

}

module.exports = { IsItATriangle };