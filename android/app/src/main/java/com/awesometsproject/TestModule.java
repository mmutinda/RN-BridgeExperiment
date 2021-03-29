package com.awesometsproject;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TestModule extends ReactContextBaseJavaModule {

    private static final String TAG = "TestModule";

    TestModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "TestModule";
    }

    @ReactMethod
    public void testMethod() {
        Log.d(TAG, "testMethod: this is called from js side: michael");
    }
}
