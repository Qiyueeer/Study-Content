#include<studio.h>

int main()
{
	int i, n;
	double price;

	for (i = 1; i <= 5; i++) {
		printf("[1] apple\n")
			printf("[2] apple\n")
			printf("[3] apple\n")
			printf("[4] apple\n")
			printf("[0] apple\n")
			scanf("%d,&n");
		if (n == 0)
			break;
		switch (n) {
		case1:price = 1.00; break;
		case2:price = 2.50; break;
		case3:price = 4.10; break;
		case4:price = 10.20; break;
		default:price = 0.00; break;

		}
		printf("price = %.21f\n", price);
	}

}