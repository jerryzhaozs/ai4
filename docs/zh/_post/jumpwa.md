# 吃糖果 二

题意：

保证数组中相邻两个元素之差小于等于 $x$

求使数组满足条件最少需要减去多少

解：

数组中每个元素只能减少不能增加，则要使需要减去的数最小，数组中最小的元素本身不可能减小，并且与其相邻的元素必须至少将高度降为 **最小元素$+x$** ，再找到剩余元素中的最小元素以此类推。

每次遍历查询到剩余元素中的最小元素再将与其相邻的元素进行调整后，这三个或两个元素的大小均不会再改变，并且保证需减去的数是最优的

码：

```c++
#include<iostream>
using namespace std;
long long a[1005];//储存元素
long long b[1005];//判断元素是否被作为最小值过
long long n,x;
long long found(){//寻找剩余元素中的最小元素位置
	long long minn=999999;//最小元素值
	long long _=0;//最小元素位置
	for(long long i=1;i<=n;i++){
		if(b[i]==1) continue;
		if(a[i]<minn){
			minn=a[i];
			_=i;
		}
	}
	return _;
}
int main(){
	long long ans=0;
	cin>>n>>x;
	for(long long i=1;i<=n;i++){
		cin>>a[i];
	}
	while(true){
		long long k=found();//获取最小元素位置
		b[k]=1;//标记已经被作为最小元素
		if(k==0) break;//所有元素均被作为最小元素过则退出
		
		
		//对与其相邻元素进行修改并添加到答案中
		if(k-1>=1){
			ans+=max((long long)0,abs(a[k-1]-a[k])-x);
			if(a[k-1]>a[k]+x){
				a[k-1]=a[k]+x;
			}
		}
		if(k+1<=n){
			ans+=max((long long)0,abs(a[k+1]-a[k])-x);
			if(a[k+1]>a[k]+x){
				a[k+1]=a[k]+x;
			}
		}
	}
	cout<<ans<<endl;
	return 0;
}
```

##### 跳WA

题意:

对数组进行排序，使相邻元素之差的平方和最大

解：

由于是相邻元素差的**平方**，应使相邻元素之差尽量大，对元素组进行排序，一大一小进行排列

注意起始高度为 $0$ 所以排完序只能从最大元素开始输出

```c++
#include<iostream>
#include<algorithm>
using namespace std;
long long a[1005];
int main(){
	long long n;
	cin>>n;
	for(long long i=1;i<=n;i++){
		cin>>a[i];
	}
	sort(a+1,a+n+1);//排序
	long long s=1,e=n;//s为最小值位置，e为最大值位置
	long long cnt=0;//cnt为已经输出的元素数量
	for(long long i=1;;i++){
		if(cnt==n) break;//所有元素均输出则退出
		if(i%2!=0){//为奇数时输出最大元素
			cout<<a[e]<<" ";
			e--;
			cnt++;
		}else{//为偶数时输出最小元素
			cout<<a[s]<<" ";
			cnt++;
			s++;
		}
	}
	return 0;
}
```

