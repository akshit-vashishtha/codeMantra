#include <iostream> 
#include <unordered_map> 
#include <vector> 
using namespace std; 
int main() { 
    int n, target; 
    cin >> n; vector<int> nums(n); 
    for (int i = 0; i < n; i++) { 
        cin >> nums[i]; 
    } 
    cin >> target; 
    vector<int> ans; 
    for(int i=0;i<n-1;++i){ 
        int left=target-nums[i]; 
        bool found=false; 
        for(int j=i+1;j<n;++j){ 
            if(nums[j]==left){ 
                ans.push_back(i); 
                ans.push_back(j); 
                found=true; 
                break; 
            } 
        } 
        if(found) break; 
    } 
    
    for(int i:ans){ 
        cout<<i<<" "; 
    } 
    return 0; 
}








string longestPalindrome(string s) {
    int n=s.length();
    int size=INT_MIN;
    int start=-1;
    for(int i=0;i<s.length();++i){
        int left=i,right=i;
        while(left>=0 && right<n && s[left]==s[right]){
            if(right-left+1>size){
                size=right-left+1;
                start=left;
            }
            left--;
            right++;
        }
        left=i;
        right=i+1;
        while(left>=0 && right<n && s[left]==s[right]){
            if(right-left+1>size){
                size=right-left+1;
                start=left;
            }
            left--;
            right++;
        }
    }
    return s.substr(start,size);
}





int majorityElement(vector<int>& nums) {
    int count=1;
    int ele=nums[0];
    for(int i=1;i<nums.size();++i){
        if(count==0){
            ele=nums[i];
            count=1;
            continue;
        }
        else if(nums[i]==ele) count++;
        else count--;
    }
    return ele;
}