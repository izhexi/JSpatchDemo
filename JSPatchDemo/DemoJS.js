/**
 * Created by chenyun on 15/7/7.
 */
require('UIColor,UIViewController,NSNumber,UIView')

/**
 * 进行 tableveiw 数据源的替换
 */
defineClass('TestTableViewController',
            {
            tableView_cellForRowAtIndexPath: function(tableView, indexPath)
            {
            var cell = tableView.dequeueReusableCellWithIdentifier("CELL");
            if(!cell){
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0,"CELL");
            }
            //            var num = self.dataSource().objectAtIndex(indexPath.row())
            //            cell.textLabel().setText(num + "js")
            var jsArray    = self.dataSource().toJS()
            cell.textLabel().setText(jsArray[indexPath.row()] + "JS")
            return cell;
            }
            }
            
            )

/**
 * 事件替换
 */
defineClass('TestViewController',
            {
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath)
            {
            if(indexPath.section() == 1 && indexPath.row() == 0){
            var testVC = self.storyboard().instantiateViewControllerWithIdentifier("testVC");
            self.navigationController().pushViewController_animated(testVC,1)
            }
            if(indexPath.section() == 1 && indexPath.row() == 1){
            
            var tableVC = JSTableViewController.alloc().init()
            self.navigationController().pushViewController_animated(tableVC,YES);
            
            }
            }
            }
            )

/**
 * 声明一个类
 */
defineClass('JSTableViewController:UITableViewController',{
            dataSource:function()
            {
            var data = self.getProp('data')
            if(data)return data;
            var data = [];
            for(var i = 0 ; i < 12;i++)
            {
            data.push("from js " + i)
            }
            self.setProp_forKey(data,'data')
            return data;
            },
            numberOfSectionsInTableView: function(tableView) {
            return 1;
            },
            tableView_numberOfRowsInSection: function(tableView, section) {
            return self.dataSource().count();
            },
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "cell")
            }
            cell.textLabel().setText(self.dataSource().objectAtIndex(indexPath.row()))
            return cell
            },
            tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
            return 60
            },
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            var alertView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert",self.dataSource().objectAtIndex(indexPath.row()), self, "OK", null);
            alertView.show()
            }
            })

/**
 * 重写 btn 点击事件
 */
defineClass('SomeTestViewController',
            {
            /**
             * 系统方法
             * @param animated
             */
            viewWillAppear:function(animated){
            self.super().viewWillAppear(1)
            self.setTitle("JSPatch Methods")
            
            },
            
            /**
             * 执行一段动画
             * @param sender
             */
            doAnimation:function(sender){
            
            var red = Math.floor(Math.random() * ( 255 +0.1))/255;
            var green = Math.floor(Math.random() * ( 255 +0.1))/255;
            var blue = Math.floor(Math.random() * ( 255 +0.1))/255;
            var color = UIColor.colorWithRed_green_blue_alpha(red,green,blue,1)
            
            UIView.animateWithDuration_animations_completion(1.0,block("",function(){
                                                                       self.view().setBackgroundColor(color)})
                                                             ,block("BOOL",function(finished){}));
            
            },
            
            /**
             * 背景色改变
             * @param sender
             */
            changeBackgroundColor:function(sender){
            var red = Math.floor(Math.random() * ( 255 +0.1))/255;
            var green = Math.floor(Math.random() * ( 255 +0.1))/255;
            var blue = Math.floor(Math.random() * ( 255 +0.1))/255;
            var color = UIColor.colorWithRed_green_blue_alpha(red,green,blue,1)
            self.view().setBackgroundColor(color)
            },
            
            /**
             * 增加控件
             * @param sender
             */
            addView:function(sender){
            var xx = Math.floor(Math.random() * (320 + 1))
            var yy = Math.floor(Math.random() * (640 + 1))
            
            var aView = require('UIView').alloc().initWithFrame({x:xx,y:yy,width:50,height:50})
            aView.setBackgroundColor(UIColor.redColor())
            self.view().addSubview(aView)
            },
            alert:function(sender){
            var alertView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert","test", self, "OK", null);
            alertView.show()
            },
            alertView_willDismissWithButtonIndex: function(alertView, idx) {
            console.log('click btn ')
            }
            })

