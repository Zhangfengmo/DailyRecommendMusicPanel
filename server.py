#!/usr/bin/env python3
"""
简单的本地HTTP服务器，用于解决CORS问题
运行方法：python server.py
然后访问：http://localhost:8000
"""

import http.server
import socketserver
import os
import sys

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

def main():
    PORT = 8000
    
    # 确保在正确的目录中
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    print(f"启动本地服务器...")
    print(f"访问地址: http://localhost:{PORT}")
    print(f"服务目录: {script_dir}")
    print("按 Ctrl+C 停止服务器")
    
    try:
        with socketserver.TCPServer(("", PORT), CORSHTTPRequestHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已停止")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"端口 {PORT} 已被占用，尝试使用端口 {PORT + 1}")
            PORT += 1
            with socketserver.TCPServer(("", PORT), CORSHTTPRequestHandler) as httpd:
                print(f"新的访问地址: http://localhost:{PORT}")
                httpd.serve_forever()
        else:
            raise

if __name__ == "__main__":
    main()
