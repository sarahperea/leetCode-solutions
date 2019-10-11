<?php

class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) {
        $sLen = strlen($s);
        if ($sLen === 0) return 0;
        if ($sLen === 1) return 1;
        $max = 0;
        for ($str="", $index=1, $i=0; $i<$sLen; $i++) {
            $str = strpos($str, $s[$i]) !== false
                ? $s[$i = $index++]
                : $str . $s[$i]; 
            
            $strLen = strlen($str);
            if ($strLen > $max)
                $max = $strLen;
        }
        return $max;
    }
}

?>