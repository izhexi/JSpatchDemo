//
//  ViewController.m
//  JSPatchDemo
//
//  Created by chenyun on 15/7/7.
//  Copyright (c) 2015年 chenyun. All rights reserved.
//

#import "TestViewController.h"
#import "JPEngine.h"
#import "TestTableViewController.h"

#define TESTDIFINE @"test define"

@interface TestViewController ()

@end

@implementation TestViewController

- (void)viewDidLoad {
    [super viewDidLoad];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (IBAction)switchJP:(UISwitch *)sender {
    if (sender.isOn) {
        [self loadScript];
    }else{
        UIAlertView *alert= [[UIAlertView alloc]initWithTitle:@"提示" message:@"JSPatch 目前不支持关闭功能" delegate: nil cancelButtonTitle:@"确定" otherButtonTitles: nil, nil];
        [alert show];
    }
}


- (void)loadScript
{
    NSString *path = [[NSBundle mainBundle] pathForResource:@"DemoJS" ofType:@"js"];
    NSString *js = [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil];
    if (js.length > 0) {
        [JPEngine startEngine];
        [JPEngine evaluateScript:js];
    }else
    {
        
    }
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (indexPath.section == 1 && indexPath.row == 0) {
        TestTableViewController *testVC = [self.storyboard instantiateViewControllerWithIdentifier:@"testVC"];
        [self.navigationController pushViewController:testVC animated:YES];
    }
    if (indexPath.section == 1 && indexPath.row == 1) {
        UIAlertView *alert = [[UIAlertView alloc]initWithTitle:@"提示" message:@"请打开JSPatch" delegate:nil cancelButtonTitle:@"确定" otherButtonTitles: nil, nil];
        [alert show];
    }

    
}


@end
