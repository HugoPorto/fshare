import Foundation

@objc public class fshare: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
