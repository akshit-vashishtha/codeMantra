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