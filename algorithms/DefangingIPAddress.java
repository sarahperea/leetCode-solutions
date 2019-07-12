class DefangingIPAddress {
    public String defangIPaddr(String address) {
        StringBuilder res = new StringBuilder();
        for(int i=0; i<address.length(); i++){
            if(address.charAt(i) == '.'){
                res.append('[');
                res.append('.');
                res.append(']');
            }
            else
                res.append(address.charAt(i));
        }
        return res.toString();
    }
}