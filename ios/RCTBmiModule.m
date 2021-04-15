//
//  RCTBmiModule.m
//  AwesomeTSProject
//
//  Created by Michael Mutinda on 15/04/2021.
//

#import "RCTBmiModule.h"
#import <React/RCTLog.h>


@implementation RCTBmiModule

RCT_EXPORT_MODULE(BmiModule);


+ (id)allocWithZone:(NSZone *)zone {
    static RCTBmiModule *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [super allocWithZone:zone];
    });
    return sharedInstance;
}


- (NSDictionary *)constantsToExport {
  return @{ @"DEFAULT_EVENT_NAME": @"SOME EVENT VALUE"};
}

RCT_EXPORT_METHOD(calculateBmiWithStrings:(NSString *)height
                  weight:(NSString *)weight
                  myCallback:(RCTResponseSenderBlock)callback)
{
  float h = [height floatValue];
  float w = [weight floatValue];
  float bmi = w / (h * h);
  callback(@[@(bmi)]);
  RCTLogInfo(@"Pretending to calcutate bmi for height %f and weight %f", h, w);
}

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"EventA"];
  
}



@end
