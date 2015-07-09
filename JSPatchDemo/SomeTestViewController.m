//
//  SomeTestViewController.m
//  JSPatchDemo
//
//  Created by chenyun on 15/7/7.
//  Copyright (c) 2015年 chenyun. All rights reserved.
//

#import "SomeTestViewController.h"
#import "AFNetworking.h"

@interface SomeTestViewController ()
@property (weak, nonatomic) IBOutlet UIButton *animationBtn;

@end

@implementation SomeTestViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)changeBackgroundColor:(UIButton *)sender {
}

- (IBAction)addView:(UIButton *)sender {
}

- (IBAction)alert:(UIButton *)sender {
}
- (IBAction)doAnimation:(UIButton *)sender {
    [UIView animateWithDuration:1 animations:^{
        self.animationBtn.backgroundColor = [UIColor purpleColor];
    } completion:^(BOOL finished) {
        
    }];
    AFHTTPRequestOperationManager *manager = [AFHTTPRequestOperationManager manager];

    [manager GET:@"https://www.baidu.com" parameters:nil success:^(AFHTTPRequestOperation *task, id responseObject) {
        NSLog(@"%@",responseObject);
        
    } failure:^(AFHTTPRequestOperation *task, NSError *error) {
        NSLog(@"%@",error);
    }];

}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
