<?php

class Solution {

    /**
     * @param Float $x
     * @param Integer $n
     * @return Float
     */
    function myPow($x, $n) {
        $max = pow(2,31) - 1;
        $min = pow(2,31) * -1;
        $ans = pow($x,$n);
        return $ans >= $max ? $max : $ans <= $min ? $min : $ans;
    }
}

?>