// Node header files
// Required by all add-ons
#include <node.h>

namespace demo {
  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;

  // This method takes in a function with the specific
  // signature FunctionCallbackInfo(Value);
  void Method(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
  }
  void init(Local<Object> exports) {
    // Node method export
    NODE_SET_METHOD(exports, "hello", Method);
  }

  // Module takes in the exact name of the node module system (addon)
  // and the exact name of the initialization function.
  NODE_MODULE(addon, init)
}
