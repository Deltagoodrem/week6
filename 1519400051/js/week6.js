/**
 * Created by z on 2016/10/15.
 */
//����һ����Ȼ���ۼ���͵ĺ���
function sumNum(n)
{
    var i,sum=0;
    for(i=1;i<=n;i++)
    {
        sum+=i;
    }
    console.log(sum);
    return sum;
}

//����һ��ż���ۼ���͵ĺ���
function sumEvenNum(n)
{
    var i,sum=0;
    for(i=2;i<=n;i+=2)
    {
        sum+=i;
    }
    console.log(sum);
    return sum;
}

//����3
function f3(height,width)
{
    var date=new Array();

    date[0]=2*(height+width);
    date[1]=height*width;

    console.log(date);
    return date;
}