import android.app.Application
import android.content.res.Configuration
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage

import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

class MainApplication : Application(), ReactApplication {

    override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
        this,
        object : DefaultReactNativeHost(this) {
            override fun getPackages(): List<ReactPackage> {
                // Correctly adding Firebase package here
                val packages: MutableList<ReactPackage> = PackageList(this).packages.toMutableList()
                packages.add(ReactNativeFirebaseAppPackage()) // Fixed instantiation of Firebase package
                return packages
            }

            override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

            override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

            override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
            override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
        }
    )

    override val reactHost: ReactHost
        get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)

 override fun onCreate() {
    super.onCreate()
    SoLoader.init(this, false)
    try {
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            load() // Load the native entry point if new architecture is enabled
        }
        // Additional Firebase initialization can go here if needed
    } catch (e: Exception) {
        Log.e("MainApplication", "Error initializing Firebase: ${e.message}")
    }
    ApplicationLifecycleDispatcher.onApplicationCreate(this)
}


    override fun onConfigurationChanged(newConfig: Configuration) {
        super.onConfigurationChanged(newConfig)
        ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
    }
}
