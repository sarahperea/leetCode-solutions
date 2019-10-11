<?

class Solution {

    /**
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr($haystack, $needle) {
        $needleLen = strlen($needle);
        $haystackLen = strlen($haystack);
        if ($needleLen === 0) return 0;
        if ($haystackLen === 0 || $needleLen > $haystackLen) return -1;
        
        for ($i=0; $i<=$haystackLen - $needleLen; $i++){
            if (substr($haystack, $i, $needleLen) === $needle)
                return $i;
        }
        return -1;
    
    }
}

?>